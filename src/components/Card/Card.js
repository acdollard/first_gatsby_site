import React from 'react';

const Card = ({ title, technologies, about }) => {

    return (
        <div className="card">
        <div className="card__side card__side--front">
            <div className="card__picture card__picture--1">
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">josephinesaffert.com</span>
            </h4>
            <div className="card__details">
                
                <div className="card__header">Technologies used:</div>
                <ul>
                    <li>Php</li>
                    <li>Javascript</li>
                    <li>sass</li>
                    <li>Wordpress</li>
                </ul>
            </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
            <div className="card__details card__cta">
            <div className="card__header-back">About:</div>
            <p>
                    This is the personal website of Josephine Saffért, a German-born financial advisor and
                    real estate expert based in Nashville, TN. I came late in the game to this project, so credit
                    for building the actual site and design goes to <a href="https://www.moximetrics.com/">
                    Tyler Hervey of Moximetrics Digital.</a> I did however
                    get to make an impact on the styling and mobile responsiveness of the site. Check it out &nbsp;
                    <a href="https://josephinesaffert.com/">here.</a> It looks pretty darn good on mobile, too. 

                </p>
            </div>
        </div>
    </div>
    )
}

export default Card;