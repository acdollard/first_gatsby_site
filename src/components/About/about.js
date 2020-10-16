import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading'
import '../../css/main.css'


const About = () => {

    return (
        <div className="about">
            <SectionHeading title={'A Little About Me'} />
            <div className="about__text">
                <p className="about__text--paragraph">
                    My name is alex dollard and this is some dummy text that I can use 
                    in place of real text for now. I'm learning React and building a portfolio
                    so I can show off my fancy shiny cool new programming skills. Chicks only dig 
                    guys who have mad skills. 
                </p>
            </div>  
        </div>
    )
}

export default About;