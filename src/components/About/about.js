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
                    I'm a guy who has spent the last year or so learning to build websites. I built this website! I hope
                    you approve. I built it using React, Sass for styling, Wordpress as a headless CMS/database, and Gatsby
                    to statically render all my pages, so they should show up pretty sharpish. <br /><br />
                    I live in Nashville, TN. Besides web development, I also really like to play the piano and read interesting
                    books, fiction and nonfiction alike. Also I have a dog named Patch who has been described as 'annoyingly cute'
                    <br /><br/>
                    hit me up: 770-542-9231 or alexdollard141@gmail.com
                </p>

        </div>
    )
}

export default About;