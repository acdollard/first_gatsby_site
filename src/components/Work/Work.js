import React from 'react';
import ReactDOM from 'react-dom';
import SectionHeading from '../SectionHeading/SectionHeading';
import Card from '../Card/Card';
import '../../css/main.css';


const Work = () => {

    let projectInfo = [
        {
            id: 1,
            title: "josephinesaffert.com",
            tech: ["Php", "Javascript", "Sass", "Wordpress"],
            description: `This is the personal website of Josephine Saffért, a German-born financial advisor and
            real estate expert based in Nashville, TN. I came late in the game to this project, so credit
            for building the actual site and design goes to <a href="https://www.moximetrics.com/">
            <b>Tyler Hervey of Moximetrics Digital.</b></a> I did however
            get to make an impact on the styling and mobile responsiveness of the site. Check it out
            <a href="https://josephinesaffert.com/"><b>here.</b></a> It looks pretty darn good on mobile, too.`
        },
        {
            id: 2,
            title: "lullify.com",
            tech: ["Divi", "CSS", "HTML", "Wordpress"],
            description: `Divi is a front-end builder that is used with Wordpress to
            create custom themes from scratch. For this project, I got tons of experience
            building the landing pages for several Lullify pages. Lullify, a company
            that produces ambient music for several settings, required many similar 
            pages to be built in a short amount of time. This project is not deployed yet.`
        },
        {
            id: 3,
            title: "covid-19 tracker",
            tech: ["React", "MySQL", "Material UI", "Victory Charts"],
            description: `This was our final project for Bootcamp, and I worked with the wonderful Kogan Pack
            and Jamie Kook. It's a tracker for COVID-19 cases where users create an account, 
            supply information about themselves and whether they have tested positive for Covid, 
            then tracks their location on a dashboard alongside charts and data about the cases. I was in charge of 
            building the map and charts. Check it out &nbsp;
            <a href="https://covid19trackerapp.herokuapp.com/"><b>here.</b></a> Or the 
            <a href="https://github.com/acdollard/covid-19-tracker"><b>Github repo.</b></a>`
        },
        {
            id: 4,
            title: "horoscopes for dogs",
            tech: ["HMTL", "Javascript", "CSS", "MySQL"],
            description: `This app is a simple yet fun way to create a dog, and then view a new daily horoscope for that dog. 
            Dogs can be added and removed, and users can safely log in and out via an authentication process. 
            This app uses a Node and Express server and Sequelize ORM is used to create models and run queries for the user and the dogs.
            I used CSS frameworks Tailwind and Bootstrap for styling, and Handlebars to render the dog's horoscope. View deployed site 
            <a href="https://sleepy-retreat-96731.herokuapp.com/"><b>Here</b></a> and Github repo <a href="https://github.com/acdollard/star-dogs"><b>Here.</b></a>`
        },
        {
            id: 5,
            title: "employee directory",
            tech: ["React", "Javascript", "HTML", "CSS"],
            description: `This project is a tool for seeing non-sensitive information about employees, like age of course. 
            The user can see a list of 200 fake employees and can filter them by name, or sort them by age. 
            Why would you want to sort them by age? Maybe you're ageist. I don't know. This project is a front-end using React, HTML, CSS, and Javascript.
            An API call is made to return a list of random users from the Random User API. View deployed app 
             &nbsp;<a href="https://guarded-taiga-97272.herokuapp.com/"><b>Here</b></a> or Github repo 
             &nbsp;<a href="https://github.com/acdollard/employee-directory"><b>Here.</b></a>`
        },
        {
            id: 6,
            title: "animousity",
            tech: ["HTML", "CSS", "Foundation", "Javascript"],
            description: `You never forget your first. This was my first project for bootcamp way, waaaay back
            in the day, and I'm still pretty proud of it. The user searches for any movie, anime or
            non-anime, and a list of recommended anime movies are returned with some basic information 
            like title, description, year, etc. It is a very humble project that I keep around to remind
            myself how far I've come. Github repo <a href="https://github.com/acdollard/Animousity"><b>Here.</b></a>`
        }
    ]

    return (
        <div>
        <section className="u-margin-bottom-medium work-section">

            <SectionHeading title={'Projects'} className="sectionWork" />

                <div className="row u-margin-bottom-medium">
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[0]}/>
                    </div>
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[1]} />
                    </div>
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[2]} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[3]} />
                    </div>
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[4]} />
                    </div>
                    <div className="col-1-of-3">
                        <Card projectInfo={projectInfo[5]} />
                    </div>

                </div>
            </section>

        </div>
    )
};

export default Work;