import React from 'react'
import Navbar from '../Navbar'
import aboutBg from '../../img/aboutBg.png'
import aboutAvatar from '../../img/avatar.jpg'
import galleryImg from '../../img/gallery-img.jpg'

const AboutPage = () => {
    
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
            }}></div>
            <div className="container">
                <div className="about-grid">
                    <div className="about-avatar">
                        <img src={aboutAvatar} alt="Mel John"  className="about-avatar-img"/>
                    </div>
                    
                    <div>
                        <h2 className="section-header">About Me</h2>
                        <h3 className="section-subheader">Coder and Designer</h3>
                        <p>I am a graduate of Bachelors Degree in Computer Science at The University of Manila. And continued my passion by taking free bootcamp courses from American TESOL and E-Global International Communications Inc.</p><br />
                        <p>Coding and designing are the things I enjoy most, I like creating something new and discover things that will expand my capacity to learn, thats why i do spend my time in researching, practicing and developing. </p>
                    </div>
                </div>
                <div className="about-gallery">
                    <div></div>
                    <img src={galleryImg} alt="gallery" />
                </div>
            </div>
            <div className="skills-section">
                <div className="container">
                    <div className="skills-card-grid">
                        <div className="skills-card">1</div>
                        <div className="skills-card">2</div>
                        <div className="skills-card">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
