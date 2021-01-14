import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import '../../css/main.css';
import axios from 'axios'

import SectionHeading from '../SectionHeading/SectionHeading'

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitEmail = (e) => {
        console.log("Your message:" + message)
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: { 
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            console.log("hi!");
            console.log(response);
            if (response.status === 200) {
                alert("Message sent! Thank you");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send")
            }
        })
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    useEffect(() => {
        console.log({ name: name, email: email, message: message});
    }, [name, email, message])


    return (
 

        <form className="contactForm" id="contactForm" onSubmit={submitEmail}>
            <div className="row__contact">
            <div className="">
        <SectionHeading title={'Contact me'} color={"white"}/>
        </div>
            </div>
            <div className="row__contact">
                <div className="col-1-of-2">
                    <input 
                        placeHolder="your name" 
                        className="textInput" 
                        value={name} 
                        onChange={(e) => setName(e.target.value) }
                        />
                </div>
                <div className="col-1-of-2">
                    <input 
                        placeholder="your email" 
                        className="textInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
            </div>
            <div className="row__contact" >
                    <textarea 
                        placeholder="message" 
                        className="textField"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
            </div>
            <div className="row__contact">
                <button type="submit" className="btn btn__contact"  value="Submit">Submit</button>

            </div>
        </form>
    
    )
};

export default ContactForm;