import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`

interface ISiteMetaData {
  title: string
  image: string
  siteUrl: string
  description: string
}

const useSiteMetaData = (): ISiteMetaData => {
  const { site } = useStaticQuery(query)
  return site.siteMetadata
}

export default useSiteMetaData
