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
                        <h2 className="section-header">Lets get in touch</h2>
                        <h3 className="footer-subheader">Need a website?</h3>
                    </div>
                    <div>
                        <form className="form-group form-container">
                            <input type="text" placeholder="Your name" />
                            <input type="text" placeholder="Your email" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            <button className="btn" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
