import React from 'react'
import Navbar from '../Navbar'
import aboutBg from '../../img/aboutBg.png'
import aboutAvatar from '../../img/avatar.jpg'
import galleryImg from '../../img/gallery-img.jpg'
import skillFrontEnd from '../../img/front-end.jpg'
import skillDesign from '../../img/Design.jpg'
import skillOthers from '../../img/Others.jpg'
import iconJavascript from '../../img/icon-js.svg'
import iconVue from '../../img/icon-vue.svg'
import iconReact from '../../img/icon-react.svg'
import iconJquery from '../../img/icon-jquery.svg'
import iconHtml from '../../img/icon-html.svg'
import iconCss from '../../img/icon-css.svg'
import iconFigma from '../../img/icon-figma.svg'
import iconSass from '../../img/icon-sass.svg'
import iconBootstrap from '../../img/icon-bootstrap.svg'
import iconTailwind from '../../img/icon-tailwind.svg'
import iconMaterialize from '../../img/icon-materialize.svg'
import iconGit from '../../img/icon-git.svg'
import iconGitlab from '../../img/icon-gitlab.svg'
import iconTrello from '../../img/icon-trello.svg'
import iconGsap from '../../img/icon-gsap.svg'
import iconDrupal from '../../img/icon-drupal.svg'
import iconBubble from '../../img/icon-bubble.svg'
import iconJira from '../../img/icon-jira.svg'
import iconAzure from '../../img/icon-azure.svg'
import quoteBg from '../../img/quotes-bg.jpg'
import skillsBg from '../../img/skills-bg.jpg'
import PortfolioVersions from './PortfolioVersions'

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
            <div className="skills-section" style={{
                background: `url("${skillsBg}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <h2 className="section-header">Technical skills</h2>
                    <h3 className="section-subheader">My top technologies</h3>
                    <div className="skills-card-grid">
                        <div className="skills-card">
                            <div className="skills-img-container" style={{
                                padding: '1.5rem',
                                background: `url("${skillFrontEnd}")`,
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
                                        <span><img src={iconVue} alt="Vue.js" />Vue.js</span>
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
                                background: `url("${skillDesign}")`,
                                height: '150px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <h4>Design</h4>
                            </div>
                            <div className="skills-card-content">
                                <ul>
                                    <li>
                                        <span><img src={iconFigma} alt="Figma" />Figma</span>
                                    </li>
                                    <li>
                                        <span><img src={iconSass} alt="Sass" />Sass</span>
                                    </li>
                                    <li>
                                        <span><img src={iconBootstrap} alt="Bootstrap" />Bootstrap</span>
                                    </li>
                                    <li>
                                        <span><img src={iconTailwind} alt="Tailwind" />Tailwind</span>
                                    </li>
                                    <li>
                                        <span><img src={iconMaterialize} alt="Materialize" />Materialize</span>
                                    </li>
                                    <li>
                                        <span><img src={iconGsap} alt="Gsap" />GSAP </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="skills-card">
                            <div className="skills-img-container" style={{
                                padding: '1.5rem',
                                background: `url("${skillOthers}")`,
                                height: '150px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <h4>Others</h4>
                            </div>
                            <div className="skills-card-content">
                                <ul>
                                    <li>
                                        <span><img src={iconDrupal} alt="Drupal" />Drupal</span>
                                    </li>
                                    <li>
                                        <span><img src={iconBubble} alt="Bubble" />Bubble.io</span>
                                    </li>
                                    <li>
                                        <span><img src={iconGit} alt="Git/Github" />Git/Github</span>
                                    </li>
                                    <li>
                                        <span><img src={iconAzure} alt="Azure" />Azure</span>
                                    </li>
                                    <li>
                                        <span><img src={iconGitlab} alt="Gitlab" />Gitlab</span>
                                    </li>
                                    <li>
                                        <span><img src={iconJira} alt="JIRA" />JIRA</span>
                                    </li>
                                    <li>
                                        <span><img src={iconTrello} alt="Trello" />Trello</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PortfolioVersions />
            
            <div className="quotes-section" style={{
                background: `url("${quoteBg}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}>
                <h4>No matter how big or small your progress, <br className="break" /> progress is <strong>STILL</strong> a <strong>PROGRESS</strong></h4>
            </div>
        </>
    )
}

export default AboutPage
