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
import ContactForm from './ContactForm/ContactForm'

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
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Syne+Mono&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Header
         siteTitle={data.site.siteMetadata?.title || `Title`}
         linkTo={'/blog'}
         destination={'Go to blog'}
         className="header" />
      <About />
      <Breaker content={<ContactForm />}/>
      <Work />
      <Footer className="footer" />
    </div>
  )
}


export default Layout;
