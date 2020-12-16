import React from 'react';
import '../css/main.css';
import {Link} from 'gatsby'

import Footer from "../components/Footer/footer"
import Header from '../components/Header/header'

const postPage = ({ pageContext }) => (
  <>
  <Header className="header header_3" siteTitle={"blog"} linkTo={'/blog'} destination={'back'} />
  <div className="blogPostDiv">
    <h1 className="heading-secondary" dangerouslySetInnerHTML={{__html: pageContext.posts.title}} />

    <div dangerouslySetInnerHTML={{__html: pageContext.posts.content}} ></div>

    <Link className="btn-small" to={'/blog'}>Back</Link>
  </div>
  <Footer className="footer footer_3" />
  </>
)

export default postPage;
