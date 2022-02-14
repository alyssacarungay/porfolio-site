import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Indexpage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>This is the homepage</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Norma2D.png"
      />
    </Layout>
  )
}

export default Indexpage