/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";

import Header from "./Header/header"
import About from './About/about'
import Work from './Work/Work'
import Breaker from './Breaker/breaker'
import Footer from './Footer/footer'

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header
         siteTitle={data.site.siteMetadata?.title || `Title`}
         linkTo={'/blog'}
         destination={'Go to blog'}
         className="header" />
      <About />
      <Breaker />
      <Work />
      <Footer className="footer" />
    </div>
  )
}


export default Layout;
