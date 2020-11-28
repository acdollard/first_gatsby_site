import React from 'react';

const Card = ({ projectInfo }) => {

    const renderedTechList = projectInfo.tech.map((technology) => {
        return (
            <li>{technology}</li>
        )
    })

    return (
        <div className="card">
        <div className="card__side card__side--front">
            <div className={`card__picture card__picture--${projectInfo.id}`}>
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">{projectInfo.title}</span>
            </h4>
            <div className="card__details">
                <div className="card__header">Technologies used:</div>
                <ul>
                    {renderedTechList}
                </ul>
            </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
            <div className="card__details card__cta">
            <div className="card__header-back">About:</div>
                <p>{projectInfo.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Card;