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
            <div className="container">

            </div>
        </div>
    )
}

export default Footer
