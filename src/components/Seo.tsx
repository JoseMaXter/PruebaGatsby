import * as React from 'react'
import useSiteMetaData from '../hooks/useSiteMetaData'

interface ISeo {
  title?: string
  description?: string
  children?: JSX.Element
}

const Seo = ({ title, description, children }: ISeo) => {
  const { description: defaultDescription, image, siteUrl, title: defaultTitle } = useSiteMetaData()

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={image} />
      {children}
    </>
  )
}

export default Seo
