import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'
import navBehance from '../img/nav-logo-behance.svg'
import navLinkIn from '../img/nav-logo-linkedIn.svg'
import navGithub from '../img/nav-logo-github.svg'
import navFacebook from '../img/nav-logo-facebook.svg'

const Navbar = () => {
    // const homeUrl = "http://localhost:3000/"
    // const currentUrl = window.location.href
    const homePath = "/"
    const currentPath = window.location.pathname
    // console.log(currentUrl)
    console.log(currentPath)


    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <NavLink to="/" exact>
                    <img src={navLogo} alt="MjP Logo" />
                </NavLink>

                <ul className={currentPath !== homePath ? 'changeStyledNav' : 'standard'}>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mel-john-pualon-75345419a" target="_blank" rel="noreferrer">
                            <img src={navLinkIn} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net" target="_blank" rel="noreferrer">
                            <img src={navBehance} alt="Behance" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Mel1207" target="_blank" rel="noreferrer">
                            <img src={navGithub} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/Meljohn.pualon" target="_blank" rel="noreferrer">
                            <img src={navFacebook} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
