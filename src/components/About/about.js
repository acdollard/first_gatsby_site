import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading'
import '../../css/main.css'


const About = () => {

    return (
        <div className="sectionAbout">
                <div className="heading-seondary sectionAbout__heading">
                    <SectionHeading title={'Who Am I?'} />
                </div>

                <p className="sectionAbout__text">
                    I'm a guy who started learning how to build websites right before the Covid Pandemic,
                    and boy am I glad I did. Coding had been and incredible addition to my life; I've found it to be an outlet
                    for endless creativity and satisfying problem-solving, a fascinating topic to read and learn about and discuss, 
                    and an exiting path forward. So far, I've worked on some cool stuff with cool people, I'm plan on doing that more, 
                    I've still very much got a very long way to go, and I'm very grateful to be here. Also, I play 
                    piano and try to keep a journal and have a dog named Patch. 
                </p>

        </div>
    )
}

export default About;