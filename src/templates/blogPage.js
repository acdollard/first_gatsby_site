import React from 'react'
import Header from "../components/Header/header"
import {Link} from 'gatsby'
import '../css/main.css';


export default ({ pageContext }) => (
    <div>  
        <Header siteTitle={"blog"} linkTo={'/'} destination={'home'} />
            {pageContext.posts.map(post => (
                <div className="blogPostDiv" key={post.node.wordpress_id}>
                    <h3 className="heading-secondary" dangerouslySetInnerHTML={{__html: post.node.title}}/>
                    <small>
                        {post.node.date}
                    </small>
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                    <div>
                        <Link to={`/alexdollard/${post.node.slug}`}>Read More</Link>
                    </div>
                </div>
            ))}


    </div>
);