import React from 'react'
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

import {Link} from 'gatsby'
// import '../css/main.css';


export default ({ pageContext }) => (
    <div>  
        <Header className="header header_2" siteTitle={"blog"} linkTo={'/'} destination={'home'} />

            {

            pageContext.posts.map(post => (
                <div className="blogPostDiv" key={post.node.wordpress_id}>
                    <h3 className="heading-secondary" dangerouslySetInnerHTML={{__html: post.node.title}}/>
                    <small>
                        {post.node.date}
                    </small>
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                    <div>
                        <Link className="btn-small" to={`/blog/${post.node.slug}`}>Read More</Link>
                    </div>
                </div>
            ))}
        <div className="pagination">
            {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                <div className="pageNumberWrapper" key={index} isCurrentPage={index + 1 === pageContext.isCurrentPage}>
                    <Link className="pageNumber" to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                        {index + 1}
                    </Link>
                </div>
             ) )}
        </div>
        <Footer className="footer footer_2" />

    </div>
);