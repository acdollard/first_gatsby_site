import React from 'react';
import '../../css/main.css'
import GithubIcon from '../../images/github-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import EmailIcon from '../../images/email-icon-2.svg';


const Footer = ({ className }) => {

    return (
    <div className={className}>
        <div className="footer__flexbox">
            <div className="footer__social-links">
                <a className="footer__social-link" href="#">
                    <img alt="email" src={EmailIcon}></img>
                </a>
                <a className="footer__social-link" href="https://github.com/acdollard">
                    <img alt="github" src={GithubIcon} />
                </a>
                <a className="footer__social-link" href="https://www.linkedin.com/in/alex-dollard-a1130aa8/">
                    <img alt="linkedin" src={LinkedInIcon}></img>
                </a>
            </div>
            <p className="footer__copyright">Copyright &copy; Alex Dollard 2021</p>
            
        </div>
    </div>
    )
}

export default Footer;