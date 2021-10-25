import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from '../img/nav-logo-main.svg'

const Navbar = (props) => {
    const [addClass, setAddClass] = useState(false)

    const handleShowMenu = () => {
        setAddClass(!addClass)
        document.body.classList.toggle('body-hidden')
    }
    
    const handleRemoveClass = () => {
        document.body.classList.remove('body-hidden')
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkClassNav)
    }, [])

    const [scrollNavClass, setScrollNavClass] = useState(false)

    const checkClassNav = () => {
        if(window.scrollY >= 80) {
            setScrollNavClass('navbar-stickTop')
        } else {
            setScrollNavClass(null)
        }
    }

    // console.log(props)

    return (
        <nav className={`navbar ${scrollNavClass}`} style={{background: !props.isExact ? '#fbfbfb' : 'transparent'}}>
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
                            <li><NavLink to="/" style={{color: '#353535'}} onClick={handleRemoveClass}><span>1.<p>Home</p></span></NavLink></li>
                            <li><NavLink to="/about" style={{color: '#353535'}} onClick={handleRemoveClass}><span>2.<p>About</p></span></NavLink></li>
                            <li><NavLink to="/portfolio" style={{color: '#353535'}} onClick={handleRemoveClass}><span>3.<p>Portfolio</p></span></NavLink></li>
                            <li><NavLink to="/blog" style={{color: '#353535'}} onClick={handleRemoveClass}><span>4.<p>Blogs</p></span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
