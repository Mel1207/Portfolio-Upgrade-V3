import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'

const Navbar = (props) => {
    const [addClass, setAddClass] = useState(false)

    const handleShowMenu = () => {
        setAddClass(!addClass)
        document.body.classList.toggle('body-hidden')
    }
    // console.log(props)
    const handleRemoveClass = () => {
        document.body.classList.remove('body-hidden')
    }

    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <NavLink to="/" exact>
                    <img src={navLogo} alt="MjP Logo" />
                </NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/" style={{color: !props.isExact ? '#353535' : '#fff'}}>Home</NavLink></li>
                    <li><NavLink to="/about" style={{color: !props.isExact ? '#353535' : '#fff'}}>About</NavLink></li>
                    <li><NavLink to="/portfolio" style={{color: !props.isExact ? '#353535' : '#fff'}}>Portfolio</NavLink></li>
                    <li><NavLink to="/blog" style={{color: !props.isExact ? '#353535' : '#fff'}}>Blogs</NavLink></li>
                </ul>

                <div className={`hamburger-menu ${addClass ? 'menu-click' : null}`} onClick={handleShowMenu}>
                    <div className="top-line"></div>
                    <div className="mid-line"></div>
                    <div className="bot-line"></div>
                </div>

                <div className={`menu ${addClass ? 'menu-show' : null}`}>
                    <div className="container">
                        <ul className="">
                            <li><NavLink to="/" style={{color: '#353535'}} onClick={handleRemoveClass}>Home</NavLink></li>
                            <li><NavLink to="/about" style={{color: '#353535'}} onClick={handleRemoveClass}>About</NavLink></li>
                            <li><NavLink to="/portfolio" style={{color: '#353535'}} onClick={handleRemoveClass}>Portfolio</NavLink></li>
                            <li><NavLink to="/blog" style={{color: '#353535'}} onClick={handleRemoveClass}>Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
