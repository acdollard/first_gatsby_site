import React from 'react';
import {Link} from 'gatsby'
import styled from 'styled-components'
import '../css/main.css';


import Header from '../components/Header/header'

const postPage = ({ pageContext }) => (
  <>
  <Header siteTitle={"blog"} linkTo={'/alexdollard/blog'} destination={'back to posts'} />
  <div className="blogPostDiv">
    <h1 className="heading-secondary" dangerouslySetInnerHTML={{__html: pageContext.posts.title}} />
    <p dangerouslySetInnerHTML={{__html: pageContext.posts.content}} />

  </div>
  </>
)

export default postPage;
