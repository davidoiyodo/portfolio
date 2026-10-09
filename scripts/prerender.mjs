import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const output = resolve('dist')
const routes = ['/', '/projects', '/about', '/design-engineering', '/fintech']
const template = await readFile(resolve(output, 'index.html'), 'utf8')
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  for (const route of routes) {
    const rendered = render(route)
    const metadata = rendered.match(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g) || []
    const head = metadata.filter(tag => tag.includes('data-rh="true"')).join('\n')
    const expected = `https://www.iyodo.design${route}`
    const canonicals = head.match(/rel="canonical"/g) || []
    if (canonicals.length !== 1 || !head.includes(`href="${expected}"`) || !head.includes(`property="og:url" content="${expected}"`)) {
      throw new Error(`Invalid SEO metadata for ${route}`)
    }
    // Hoist native React metadata; reveal motion content in the static body.
    const body = rendered
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*data-rh="true"[^>]*>/g, '')
      .replace(/opacity:0(?=;|")/g, 'opacity:1')
      .replace(/transform:[^;"]*(?=;|")/g, 'transform:none')
    const html = template
      .replace(/^.*data-rh="true".*\n/gm, '')
      .replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
      .replace(/[ \t]+$/gm, '')
    const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
    await writeFile(resolve(output, file), html)
    console.log(`Prerendered ${route}`)
  }
} finally {
  await vite.close()
}
