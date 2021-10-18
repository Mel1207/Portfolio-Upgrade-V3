import React from 'react'
import aboutBg from '../../img/aboutBg.png'
import Navbar from '../Navbar'
import Tabs from './Tabs'

const PortfolioPage = () => {
    return (
        <>
            <Navbar />
            <div className="about-bg" style={{
                background: `url("${aboutBg}")`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                height: '60vh',
                width: '100%',
                display: 'block'
            }}>
                <div className="container" style={{position: 'relative',height: '100%'}}>
                    <div className="page-title">
                        <h2 className="section-header">Portfolio</h2>
                        <h3 className="section-subheader">Take a look at my projects</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <Tabs />
            </div>
        </>
    )
}

export default PortfolioPage
