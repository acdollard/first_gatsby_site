import React from 'react'
import Layout from "../components/layout"
import Header from "../components/Header/header"


export default ({ pageContext }) => (
    <div>  
       { console.log(pageContext)}
    <Header siteTitle={pageContext.slug} />

    </div>
);