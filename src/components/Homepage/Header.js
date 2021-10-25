import React from 'react'
import headerBg from '../../img/header-bg.jpg'
import { Link } from 'react-router-dom'
import iconLinkedIn from '../../img/nav-logo-linkedIn.svg'
import iconBehance from '../../img/nav-logo-behance.svg'
import iconGithub from '../../img/nav-logo-github.svg'
import iconFacebook from '../../img/nav-logo-facebook.svg'


const Header = () => {
    const handleScrollTo = () => {
        window.scrollTo({
            top: 890,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className="section-container">
                <div className="container">
                    <div className="header-flex">
                        <div>
                            <h2 className="section-header">Hi There I'm MJ</h2>
                            <h1>FRONT_END DEVELOPER</h1>
                            <h1>UI/UX DESIGNER</h1>
                            <Link to="/portfolio" className="btn">See works</Link>
                        </div>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/mel-john-pualon-75345419a/" rel="noopener noreferrer" target="_blank"><img src={iconLinkedIn} alt="linkedIn" /></a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/" rel="noopener noreferrer" target="_blank"><img src={iconBehance} alt="behance" /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Mel1207" rel="noopener noreferrer" target="_blank"><img src={iconGithub} alt="github" /></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/Meljohn.pualon/" rel="noopener noreferrer" target="_blank"><img src={iconFacebook} alt="facebook" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="scroll-btn" onClick={handleScrollTo}> 
                        <a>
                            <div className="scroll-trigger"></div>
                            <p>SCROLL DOWN</p>
                        </a>
                    </div>
                </div>
                <div className="bg-img" style={{
                    background: `url("${headerBg}")`,
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",}}>
                </div>
            </div>
        </>
    )
}

export default Header
