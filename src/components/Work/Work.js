import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import '../../css/main.css';


const Work = () => {

    return (

        <section className="u-margin-bottom-medium work-section">

            <SectionHeading title={'Projects'} className="sectionWork" />

                <div className="row u-margin-bottom-medium">
                    <div className="col-1-of-3">
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
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">lullify.com</span>
                                </h4>
                                <div className="card__details">
                                    
                                    <div className="card__header">Technologies used:</div>
                                    <ul>
                                        <li>Divi</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Wordpress</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                            <div className="card__details card__cta">
                                <div className="card__header-back">About:</div>
                                <p>
                                        Divi is a front-end builder that is used with Wordpress to create custom
                                        themes from scratch. For this project, I got tons of experience building the landing pages
                                        for several <a href="https://www.lullify.com/">Lullify</a> pages. Lullify, a company that 
                                        produces ambient music for several settings, required many similar pages to be built in a short amount
                                        of time. This project is not deployed yet. 

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Covid-19 Tracker</span>
                                </h4>
                                <div className="card__details">
                                    
                                    <div className="card__header">Technologies used:</div>
                                    <ul>
                                        <li>React</li>
                                        <li>MySQL</li>
                                        <li>Material UI</li>
                                        <li>Passport.js</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                            <div className="card__details card__cta">
                                <div className="card__header-back">About:</div>
                                <p>
                                        This was our final project for Bootcamp, and I worked with the wonderful Kogan Pack
                                        and Jamie Kook. It's a tracker for COVID-19 cases where users create an account, 
                                        supply information about themselves and whether they have tested positive for Covid, 
                                        then tracks their location on a dashboard alongside charts and data about the cases. I was in charge of 
                                        building the map and charts. Check it out &nbsp;
                                        <a href="https://covid19trackerapp.herokuapp.com/">here.</a> Or the 
                                        <a href="https://github.com/acdollard/covid-19-tracker">Github repo.</a>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--4">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--4">Horoscopes for Dogs</span>
                                </h4>
                                <div className="card__details">
                                    
                                    <div className="card__header">Technologies used:</div>
                                    <ul>
                                        <li>HTML</li>
                                        <li>Javascript</li>
                                        <li>CSS</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                            <div className="card__details card__cta">
                                <div className="card__header-back">About:</div>
                                <p> 
                                This app is a simple yet fun way to create a dog, and then view a new daily horoscope for that dog. 
                                Dogs can be added and removed, and users can safely log in and out via an authentication process. 
                                This app uses a Node and Express server and Sequelize ORM is used to create models and run queries for the user and the dogs.
                                I used CSS frameworks Tailwind and Bootstrap for styling, and Handlebars to render the dog's horoscope. View deployed site 
                                <a href="https://sleepy-retreat-96731.herokuapp.com/">Here</a> and Github repo <a href="https://github.com/acdollard/star-dogs">Here.</a>   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--5">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--5">Employee Directory</span>
                                </h4>
                                <div className="card__details">
                                    
                                    <div className="card__header">Technologies used:</div>
                                    <ul>
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
 
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                            <div className="card__details card__cta">
                                <div className="card__header-back">About:</div>
                                <p>
                                This project is a tool for seeing non-sensitive information about employees, like age of course. 
                                The user can see a list of 200 fake employees and can filter them by name, or sort them by age. 
                                Why would you want to sort them by age? Maybe you're ageist. I don't know. This project is a front-end using React, HTML, CSS, and Javascript.
                                An API call is made to return a list of random users from the Random User API. View deployed app 
                                 &nbsp;<a href="https://guarded-taiga-97272.herokuapp.com/">Here</a> or Github repo 
                                 &nbsp;<a href="https://github.com/acdollard/employee-directory">Here.</a>
 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--6">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--6">Animousity</span>
                                </h4>
                                <div className="card__details">
                                    
                                    <div className="card__header">Technologies used:</div>
                                    <ul>
                                        <li>JQuery</li>
                                        <li>Javascript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-6">
                            <div className="card__details card__cta">
                                <div className="card__header-back">About:</div>
                                <p>
                                        You never forget your first. This was my first project for bootcamp way, waaaay back
                                        in the day, and I'm still pretty proud of it. The user searches for any movie, anime or
                                        non-anime, and a list of recommended anime movies are returned with some basic information 
                                        like title, description, year, etc. It is a very humble project that I keep around to remind
                                        myself how far I've come. Github repo <a href="https://github.com/acdollard/Animousity">Here.</a>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    )
};

export default Work;