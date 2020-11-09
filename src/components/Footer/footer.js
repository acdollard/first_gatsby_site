import React from 'react';
import '../../css/main.css'

const Footer = () => {

    return (
    <div className="footer">
        <div className="contact-info">
            <h1 className="background-quote footer__contact-info">alexdollard141@gmail.com</h1>
            <div className="footer__links-div">
                <a className="footer__link" href="https://www.linkedin.com/in/alex-dollard-a1130aa8/">linkedin</a>
                <a className="footer__link" href="https://github.com/acdollard">Github</a>
                <a className="footer__link" href="https://www.instagram.com/notalexdollard/?hl=en">Instagram</a>
            </div>
        </div>
    </div>
    )
}

export default Footer;