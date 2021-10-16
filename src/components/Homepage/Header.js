import React, {useState} from 'react'
import headerBg from '../../img/header-bg.jpg'
import { Link } from 'react-router-dom'
import menuBg from '../../img/gallery-img.jpg'

const Header = () => {
    const [ className, setClassName ] = useState()
    const handleToggle = () => {
        setClassName('menu-show')
        console.log('menu clicked')
    }

    

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
                        <div className="sidenav-menu" onClick={handleToggle}>
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
                }}></div>

                <div className={`menu ${className}`}>
                    <div>
                        <ul>
                            <li>
                                <Link to="/"><h1 style={{color: '#fff'}}>HOME</h1></Link>
                            </li>
                            <li>
                                <Link to="/about"><h1 style={{color: '#fff'}}>ABOUT</h1></Link>
                            </li>
                            <li>
                                <Link to="/blog"><h1 style={{color: '#fff'}}>BLOGS</h1></Link>
                            </li>
                            <li>
                                <Link to="/portfolio"><h1 style={{color: '#fff'}}>PORTFOLIO</h1></Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{
                        background: `url("${menuBg}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                        }}>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header
