import React from 'react'
import footerBg from '../img/footer-bg.png'

const Footer = () => {
    return (
        <div className="section-footer" style={{
            background: `url("${footerBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="overlay">
                <div className="container">
                    <div>
                        <h2 className="section-header">My Services</h2>
                        <h3 className="footer-subheader">Take a look at my experties</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
