import React from 'react'
import headerBg from '../img/header-bg.jpg'

const Header = () => {
    return (
        <div className="section-container">
            <div className="container">
                <h2 className="section-header">Hi There I'm MJ</h2>
                <h1>FRONT_END DEVELOPER</h1>
                <h1>UI/UX DESIGNER</h1>
                <a href="#!" className="btn">See Works</a>
            </div>
            <div className="bg-img" style={{
                background: `url("${headerBg}")`,
                backgroundSize: "cover",
                // backgroundAttachment: "fixed",
                backgroundPosition: "center"
            }}></div>
        </div>
    )
}

export default Header
