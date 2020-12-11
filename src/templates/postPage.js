import React from 'react';
import '../css/main.css';

import Footer from "../components/Footer/footer"
import Header from '../components/Header/header'

const postPage = ({ pageContext }) => (
  <>
  <Header className="header header_2" siteTitle={"blog"} linkTo={'/blog'} destination={'back to posts'} />
  <div className="blogPostDiv">
    <h1 className="heading-secondary" dangerouslySetInnerHTML={{__html: pageContext.posts.title}} />

    <div dangerouslySetInnerHTML={{__html: pageContext.posts.content}} ></div>

  </div>
  <Footer className="footer footer_2" />
  </>
)

export default postPage;
