import React from 'react'
import headerBg from '../../img/header-bg.jpg'

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
                            <a href="#!" className="btn">See Works</a>
                        </div>
                        <div className="sidenav-menu">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-menu">MENU</div>
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
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center"
                }}></div>
            </div>
        </>
    )
}

export default Header
