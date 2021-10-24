import React from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'

const Navbar = (props) => {
    // console.log(props)
  
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <NavLink to="/" exact>
                    <img src={navLogo} alt="MjP Logo" />
                </NavLink>
                <ul>
                    <li><NavLink to="/" style={{color: !props.isExact ? '#353535' : '#fff'}}>Home</NavLink></li>
                    <li><NavLink to="/about" style={{color: !props.isExact ? '#353535' : '#fff'}}>About</NavLink></li>
                    <li><NavLink to="/portfolio" style={{color: !props.isExact ? '#353535' : '#fff'}}>Portfolio</NavLink></li>
                    <li><NavLink to="/blog" style={{color: !props.isExact ? '#353535' : '#fff'}}>Blogs</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
