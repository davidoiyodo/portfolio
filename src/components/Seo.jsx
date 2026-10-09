import { Helmet } from 'react-helmet-async'

const origin = 'https://www.iyodo.design'
const image = `${origin}/og-image.png`

export default function Seo({ title, description, path }) {
  const url = `${origin}${path}`

  return (
    <Helmet>
      <title data-rh="true">{title}</title>
      <meta data-rh="true" name="description" content={description} />
      <link data-rh="true" rel="canonical" href={url} />
      <meta data-rh="true" property="og:type" content="website" />
      <meta data-rh="true" property="og:url" content={url} />
      <meta data-rh="true" property="og:title" content={title} />
      <meta data-rh="true" property="og:description" content={description} />
      <meta data-rh="true" property="og:image" content={image} />
      <meta data-rh="true" property="og:image:width" content="1200" />
      <meta data-rh="true" property="og:image:height" content="630" />
      <meta data-rh="true" property="og:image:alt" content="Iyodo David — I design products and ship them." />
      <meta data-rh="true" property="og:site_name" content="Iyodo David" />
      <meta data-rh="true" property="og:locale" content="en_US" />
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:title" content={title} />
      <meta data-rh="true" name="twitter:description" content={description} />
      <meta data-rh="true" name="twitter:image" content={image} />
      <meta data-rh="true" name="twitter:image:alt" content="Iyodo David — I design products and ship them." />
    </Helmet>
  )
}
