import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'
import navBehance from '../img/nav-logo-behance.svg'
import navLinkIn from '../img/nav-logo-linkedIn.svg'
import navGithub from '../img/nav-logo-github.svg'
import navFacebook from '../img/nav-logo-facebook.svg'
import navBlackLinkIn from '../img/nav-logoBlack-linkedIn.svg'
import navBlackBehance from '../img/nav-logoBlack-behance.svg'
import navBlackGithub from '../img/nav-logoBlack-github.svg'
import navBlackFacebook from '../img/nav-logoBlack-facebook.svg'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <NavLink to="/" exact>
                    <img src={navLogo} alt="MjP Logo" />
                </NavLink>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mel-john-pualon-75345419a" target="_blank" rel="noreferrer">
                            <img src={!props.isExact ? navBlackLinkIn : navLinkIn } alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net" target="_blank" rel="noreferrer">
                            <img src={!props.isExact ? navBlackBehance : navBehance } alt="Behance" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Mel1207" target="_blank" rel="noreferrer">
                            <img src={!props.isExact ? navBlackGithub : navGithub} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/Meljohn.pualon" target="_blank" rel="noreferrer">
                            <img src={!props.isExact ? navBlackFacebook : navFacebook} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
