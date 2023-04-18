import React from 'react'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import type { HeadProps } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <div>
        <div>Acerca de mi life</div>
      </div>
    </Layout>
  )
}

export const Head = (props: HeadProps) => <Seo title="About" />

export default About
