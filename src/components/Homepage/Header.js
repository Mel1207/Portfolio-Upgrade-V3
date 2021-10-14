import React from 'react'
import headerBg from '../../img/header-bg.jpg'
import Navbar from '../Navbar'

const Header = () => {
    return (
        
        <>
            <Navbar />
            <div className="section-container">
                <div className="container">
                    <h2 className="section-header">Hi There I'm MJ</h2>
                    <h1>FRONT_END DEVELOPER</h1>
                    <h1>UI/UX DESIGNER</h1>
                    <a href="#!" className="btn">See Works</a>

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
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center"
                }}></div>
            </div>
        </>
    )
}

export default Header
