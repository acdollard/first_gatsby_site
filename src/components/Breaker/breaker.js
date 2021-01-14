import React from 'react';

const Breaker = (props) => {

    return (
        <>
        <div className="pageBreaker">
        <div className="pageBreaker__content">
            {props.content}
        </div>
        </div>
        </>
    );
}

export default Breaker;