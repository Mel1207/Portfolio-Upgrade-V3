import React from 'react'
import footerBg from '../img/footer-bg.png'
import navBehance from '../img/nav-logo-behance.svg'
import navLinkIn from '../img/nav-logo-linkedIn.svg'
import navGithub from '../img/nav-logo-github.svg'
import navFacebook from '../img/nav-logo-facebook.svg'

const Footer = () => {
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
                                <li><a href="#!"><img src={navLinkIn} alt="" /></a></li>
                                <li><a href="#!"><img src={navBehance} alt="" /></a></li>
                                <li><a href="#!"><img src={navGithub} alt="" /></a></li>
                                <li><a href="#!"><img src={navFacebook} alt="" /></a></li>
                            </ul>
                        </div>
                        <div>
                            <form className="form-group form-container">
                                <input type="text" placeholder="Your name" />
                                <input type="text" placeholder="Your email" />
                                <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                <button className="btn" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                    <span className="footer-base">Copyright © 2021 <span>|</span> Mel John Pualon</span>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
