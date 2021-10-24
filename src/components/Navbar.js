import React from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <NavLink to="/" exact>
                    <img src={navLogo} alt="MjP Logo" />
                </NavLink>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/blog">Blogs</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
