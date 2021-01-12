import React, { useState, useEffect, useRef } from 'react'
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Breaker from  "../components/Breaker/breaker";
import Helmet from 'react-helmet';

import {Link} from 'gatsby'
// import '../css/main.css';

const pageNumberStyle = {
    background: `${props => props.isCurrentPage ? 'blue' : 'red'}`,
}


export default ({ pageContext }) => {


return (
    
    <div>  
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Syne+Mono&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Header className="header header_2" siteTitle={"blog"} linkTo={'/'} destination={'home'} />
            {pageContext.posts.map(post => (
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
            {Array.from({length: pageContext.numberOfPages}).map((page, index) => {
                return (
                <div 
                    className="pageNumberWrapper" 
                    key={index} 
                    isCurrentPage={index+1 === pageContext.currentPage} 
                    // style={{
                    //     backgroundColor: `${props.isCurrentPage ? 'blue' : 'red'}`
                    // }}
                    >
                    <Link className="pageNumber" to={index === 0 ? '/blog' : `/blog/${index + 1}`} >
                        {index + 1}
                    </Link>
                </div>
                )
             } )}
        </div>
        {/* <Breaker /> */}
        <Footer className="footer footer_2" />

    </div>
)};