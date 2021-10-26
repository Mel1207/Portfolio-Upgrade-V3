import React from 'react'
import footerBg from '../img/footer-bg.png'
import navBehance from '../img/nav-logo-behance.svg'
import navLinkIn from '../img/nav-logo-linkedIn.svg'
import navGithub from '../img/nav-logo-github.svg'
import navFacebook from '../img/nav-logo-facebook.svg'
import emailjs from 'emailjs-com'

const Footer = () => {
    const handleSendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_0c1xddh', 
            'template_owlqxmf', 
            e.target, 
            'user_8eChwnD42VoCAsL3qRkT5'
        ).then(res => {
            console.log(res.status)

        }).catch(console.error)

        document.querySelector('#inputName').value = ''
        document.querySelector('#inputEmail').value = ''
        document.querySelector('#inputMessage').value = ''
    }

    return (
        <div className="section-footer" style={{
            background: `url("${footerBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="overlay">
                <div className="container">
                    <div className="grid">
                        <div>
                            <h2 className="section-header">Lets get in touch</h2>
                            <h3 className="footer-subheader">Need a website ?</h3>

                            <ul className="footer-links">
                                <li><a href="https://www.linkedin.com/in/mel-john-pualon-75345419a/" rel="noopener noreferrer" target="_blank"><img src={navLinkIn} alt="LinkedIn" /></a></li>
                                <li><a href="https://www.behance.net/" rel="noopener noreferrer" target="_blank"><img src={navBehance} alt="Behance" /></a></li>
                                <li><a href="https://github.com/Mel1207" rel="noopener noreferrer" target="_blank"><img src={navGithub} alt="Github" /></a></li>
                                <li><a href="https://www.facebook.com/Meljohn.pualon/" rel="noopener noreferrer" target="_blank"><img src={navFacebook} alt="Facebook" /></a></li>
                            </ul>
                        </div>
                        <div>
                            <form className="form-group form-container" onSubmit={handleSendEmail}>
                                <input type="text" name="name" placeholder="Your name" id="inputName"/>
                                <input type="text" name="sender-email" placeholder="Your email" id="inputEmail"/>
                                <textarea cols="30" rows="10" placeholder="Your message" name="message" id="inputMessage"></textarea>
                                <button className="btn" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                    <span className="footer-base">Copyright © 2021 <span>|</span> Mel John Pualon</span>
                </div>
            </div>
            {/* <div className="showMessage">
                <span>Your Email has been sent thank you!</span>
            </div> */}
        </div>
    )
}

export default Footer
