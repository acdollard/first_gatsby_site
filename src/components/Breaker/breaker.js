import React from 'react';
import Helmet from 'react-helmet'

const Breaker = () => {

    return (
        <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Syne+Mono&display=swap" rel="stylesheet"></link>
        </Helmet>
        <div className="pageBreaker">
        <div className="quote-box background-quote">
            <h2>"Ain't nothing to it but to do it."</h2>
            {/* <h4>-Mother Teresa</h4> */}
        </div>
        </div>
        </>
    );
}

export default Breaker;