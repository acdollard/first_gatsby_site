import React, { useState } from 'react';
import '../../css/main.css';

import SectionHeading from '../SectionHeading/SectionHeading'

const ContactForm = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const [subject, setSubject] = useState("");

    // const submitEmail = (e) => {
    //     console.log("Your message:" + message)
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "/send",
    //         data: { 
    //             name: name,
    //             email: email,
    //             message: message
    //         }
    //     }).then((response) => {
    //         console.log("hi!");
    //         console.log(response);
    //         if (response.status === 200) {
    //             alert("Message sent! Thank you");
    //             resetForm();
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send")
    //         }
    //     })
    // }

    // const resetForm = () => {
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //     console.log("form reset")
    // }

    // useEffect(() => {
    //     console.log({ name: name, email: email, message: message});
    // }, [name, email, message])


    return (
        <form 
            className="contactForm" 
            id="contactForm" 
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="row__contact">
                <SectionHeading title={'Contact me'} color={"white"}/>
            </div>
            <div className="row__contact">
                <div className="col-1-of-2">
                    <input 
                        type="text"
                        placeholder="your name" 
                        className="textInput" 
                        // value={name} 
                        // onChange={(e) => setName(e.target.value) }
                        />
                </div>
                <div className="col-1-of-2">
                    <input 
                        type="text"
                        placeholder="your email" 
                        className="textInput"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
            </div>
            <div className="row__contact" >
                <input
                    type="text"
                    placeholder="subject"
                    className="textInput"
                    // value={subject}
                    // onChange={(e)=> setSubject(e.target.value)}
                    />

            </div>
                <div className="row__contact" >
                    <textarea 
                        placeholder="message" 
                        className="textField"
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        />
                </div>
            <div className="row__contact">
                <button type="submit" className="btn btn__contact" >Submit</button>
            </div>
        </form>
    )
};

export default ContactForm;