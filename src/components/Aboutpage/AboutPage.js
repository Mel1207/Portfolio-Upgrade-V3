import React from 'react'
import Navbar from '../Navbar'
import aboutBg from '../../img/aboutBg.png'
import aboutAvatar from '../../img/avatar.jpg'
import galleryImg from '../../img/gallery-img.jpg'
import iconJavascript from '../../img/icon-js.svg'
import iconReact from '../../img/icon-react.svg'
import iconJquery from '../../img/icon-jquery.svg'
import iconHtml from '../../img/icon-html.svg'
import iconCss from '../../img/icon-css.svg'

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
                    <h2 className="section-header">Technical skills</h2>
                    <h3 className="section-subheader">My top technologies</h3>
                    <div className="skills-card-grid">
                        <div className="skills-card">
                            <div className="skills-img-container" style={{
                                padding: '1.5rem',
                                background: `url("${galleryImg}")`,
                                height: '150px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <h4>FRONT-END</h4>
                            </div>
                            <div className="skills-card-content">
                                <ul>
                                    <li>
                                        <span><img src={iconJavascript} alt="Javascript" />Javascript</span>
                                    </li>
                                    <li>
                                        <span><img src={iconReact} alt="React.js" />React.js</span>
                                    </li>
                                    <li>
                                        <span><img src={iconJquery} alt="Jquery" />Jquery</span>
                                    </li>
                                    <li>
                                        <span><img src={iconHtml} alt="HTML5" />HTML5</span>
                                    </li>
                                    <li>
                                        <span><img src={iconCss} alt="CSS3" />CSS3</span>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="skills-card">
                            <div className="skills-img-container" style={{
                                padding: '1.5rem',
                                background: `url("${galleryImg}")`,
                                height: '150px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <h4>FRONT-END</h4>
                            </div>
                            <div className="skills-card-content">
                                <ul>
                                    <li>
                                        <span><img src={iconJavascript} alt="Javascript" />Javascript</span>
                                    </li>
                                    <li>
                                        <span><img src={iconReact} alt="React.js" />React.js</span>
                                    </li>
                                    <li>
                                        <span><img src={iconJquery} alt="Jquery" />Jquery</span>
                                    </li>
                                    <li>
                                        <span><img src={iconHtml} alt="HTML5" />HTML5</span>
                                    </li>
                                    <li>
                                        <span><img src={iconCss} alt="CSS3" />CSS3</span>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="skills-card">
                            <div className="skills-img-container" style={{
                                padding: '1.5rem',
                                background: `url("${galleryImg}")`,
                                height: '150px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <h4>FRONT-END</h4>
                            </div>
                            <div className="skills-card-content">
                                <ul>
                                    <li>
                                        <span><img src={iconJavascript} alt="Javascript" />Javascript</span>
                                    </li>
                                    <li>
                                        <span><img src={iconReact} alt="React.js" />React.js</span>
                                    </li>
                                    <li>
                                        <span><img src={iconJquery} alt="Jquery" />Jquery</span>
                                    </li>
                                    <li>
                                        <span><img src={iconHtml} alt="HTML5" />HTML5</span>
                                    </li>
                                    <li>
                                        <span><img src={iconCss} alt="CSS3" />CSS3</span>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
