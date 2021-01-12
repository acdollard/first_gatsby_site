import React from 'react';
import '../css/main.css';
import {Link} from 'gatsby';
import Helmet from 'react-helmet';

import Footer from "../components/Footer/footer";
import Header from '../components/Header/header';
import { Disqus } from 'gatsby-plugin-disqus';

const postPage = ({ pageContext }) => (
  <>
  <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Syne+Mono&display=swap" rel="stylesheet"></link>
  </Helmet>
  <Header className="header header_3" siteTitle={"blog"} linkTo={'/blog'} destination={'all posts'} />
  <div className="blogPostDiv">
    <h1 className="heading-secondary" dangerouslySetInnerHTML={{__html: pageContext.posts.title}} />

    <div dangerouslySetInnerHTML={{__html: pageContext.posts.content}} ></div>

    <Link className="btn-small" to={'/blog'}>Back</Link>
  </div>
  <div className="disqusDiv">
  <Disqus
        config={{
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: `http://www.alexdollard.xyz/blog${pageContext.posts.slug}`,
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: `${pageContext.posts.slug}`,
            /* Replace PAGE_TITLE with the title of the page */
            title: `${pageContext.posts.title}`,
        }}
    />
  </div>
  <Footer className="footer footer_3" />
  </>
)

export default postPage;
