import React from 'react'
import logoFrontEnd from '../img/logo-frontend.svg'
import logoUiux from '../img/logo-uiux.svg'
import logoResponsive from '../img/logo-responsive.svg'

const Section2 = () => {
    return (
        <div className="section-2">
            <div className="container">
                <h2 className="section-header">My Services</h2>
                <div className="grid">
                    <div>
                        <img src={logoFrontEnd} alt="" />
                        <h5>FRONT-END DEVELOPMENT</h5>
                        <p>I can build a dynamic website designs, creates an interaction and user experience. I can convert the design concept into a usable component.</p>
                    </div>
                    <div>
                        <img src={logoUiux} alt="" />
                        <h5>UI/UX DESIGN</h5>
                        <p>I design a UI-UX to the extent of a project and can create a prototype that demonstrate the project features and user experience.</p>
                    </div>
                    <div>
                        <img src={logoResponsive} alt="" />
                        <h5>RESPONSIVE DESIGN</h5>
                        <p>I make every project responsive and mobile friendly to the users. Making layouts will automatically adjust and adapt to any device screen size.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
