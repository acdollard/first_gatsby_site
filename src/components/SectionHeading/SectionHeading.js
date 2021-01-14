import React from 'react';
import '../../css/main.css';


const SectionTitle = ({title, color}) => {
    return (
        <div className="section_heading">
            <h2 className={`section_heading__text${color ? "__" +color : ""}`}>
                {title}
            </h2>
        </div>
    )
};

export default SectionTitle;