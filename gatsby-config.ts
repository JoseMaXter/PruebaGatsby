import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.landingMaXter.com`,
    description: 'Ventas de objectos no identificados',
    title: 'Landin Page',
    image: '/logoManager.ico',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
  ],
}

export default config
