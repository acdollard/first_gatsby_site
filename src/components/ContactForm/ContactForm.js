import React, { useState } from 'react';
import { Link } from "gatsby";
import '../../css/main.css';

import SectionHeading from '../SectionHeading/SectionHeading'

const ContactForm = () => {

    const [name, setName] = useState("");

    return (
 

        <div className="contactForm" id="contactForm">
            <div className="row__contact">
            <div className="">
        <SectionHeading title={'Contact me'} color={"white"}/>
        </div>
            </div>
            <div className="row__contact">
                <div className="col-1-of-2">
                    <input placeHolder="name" className="textInput"/>
                </div>
                <div className="col-1-of-2">
                    <input placeHolder="email" className="textInput"/>
                </div>
            </div>
            <div className="row__contact" >
                    <textarea placeholder="message" className="textField"/>
            </div>
            <Link to={"#"} type="submit" className="btn btn__contact">Submit</Link>
        </div>
    
    )
};

export default ContactForm;