import React from 'react'
import Navbar from '../Navbar'
import aboutBg from '../../img/aboutBg.png'
import aboutAvatar from '../../img/avatar.jpg'

const AboutPage = () => {
    
    return (
        <>
            <Navbar />
            <div className="about-bg" style={{
                background: `url("${aboutBg}")`,
                height: '60vh',
                width: '100%',
                display: 'block'
            }}></div>
            <div className="container">
                <div className="about-grid">
                    <div className="about-avatar">
                        <img src={aboutAvatar} alt="Mel John"  className="about-avatar-img"/>
                    </div>
                    

                    <div>
                        <h2 className="section-header">Hi There I'm MJ</h2>
                        <h3 className="section-subheader">Coder and Designer</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam necessitatibus temporibus explicabo quidem atque maxime quam mollitia assumenda maiores sint!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eum ea suscipit! Quis consequatur rerum vero, tempora voluptate minus sed.
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AboutPage
