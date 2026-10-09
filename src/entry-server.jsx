import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

export function render(path) {
  return renderToString(
    <HelmetProvider>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  )
}
