import React from 'react'
import Header from "../components/Header/header"
import {Link} from 'gatsby'


export default ({ pageContext }) => (
    <div>  
    <div className="blogPostWrapper" >
        <Header siteTitle={"blog"} linkTo={'/'} destination={'home'} />
        {pageContext.posts.map(post => (
                <div key={post.node.wordpress_id}>
                    <h3 dangerouslySetInnerHTML={{__html: post.node.title}}/>
                    <small>
                        {post.node.date}
                    </small>
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                    <div>
                        <Link to={`/post/${post.node.slug}`}>Read More</Link>
                    </div>
                </div>
            ))}

    </div>

    </div>
);