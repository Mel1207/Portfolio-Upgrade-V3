import React from 'react'
import headerBg from '../../img/header-bg.jpg'
import { Link } from 'react-router-dom'


const Header = () => {

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
                                <li>link 1</li>
                                <li>link 1</li>
                                <li>link 1</li>
                                <li>link 1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="scroll-btn"> 
                        <a href="#section-1">
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
