/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";

import Header from "./Header/header"
import About from './About/about'
import Work from './Work/Work'
import Breaker from './Breaker/breaker'

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
    <>
      <Helmet>
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" /> */}
      </Helmet>
      <Header
         siteTitle={data.site.siteMetadata?.title || `Title`}
         linkTo={'/alexdollard/blog'}
         destination={'blog'} />
      <About />
      <Breaker />
      <Work />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
