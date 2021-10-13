import React from 'react'
import navLogo from '../img/nav-logo-main.svg'
import navBehance from '../img/nav-logo-behance.svg'
import navLinkIn from '../img/nav-logo-linkedIn.svg'
import navGithub from '../img/nav-logo-github.svg'
import navFacebook from '../img/nav-logo-facebook.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <a href="https://meljohnpualon.netlify.app/" target="_blank">
                    <img src={navLogo} alt="MjP Logo" />
                </a>

                <ul>
                    <li>
                        <a href="#!">
                            <img src={navLinkIn} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={navBehance} alt="Behance" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={navGithub} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={navFacebook} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
