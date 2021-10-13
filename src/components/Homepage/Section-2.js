import React from 'react'
import logoFrontEnd from '../../img/logo-frontend.svg'
import logoUiux from '../../img/logo-uiux.svg'
import logoResponsive from '../../img/logo-responsive.svg'

const Section2 = () => {
    return (
        <div className="section-2">
            <div className="container">
                <h2 className="section-header">My Services</h2>
                <h3 className="section-subheader">Take a look at my experties</h3>

                <div className="grid">
                    <div className="grid-container">
                        <div className="container-logo logo-1">
                            <img src={logoFrontEnd} alt="" />
                        </div>
                        <h5>FRONT-END DEVELOPMENT</h5>
                        <p>I can build a dynamic website designs, creates an interaction and user experience. I can convert the design concept into a usable component.</p>
                    </div>
                    <div className="grid-container">
                        <div className="container-logo logo-2">
                            <img src={logoUiux} alt="" />
                        </div>  
                        <h5>UI/UX DESIGN</h5>
                        <p>I design a UI-UX to the extent of a project and can create a prototype that demonstrate the project features and user experience.</p>
                    </div>
                    <div className="grid-container">
                        <div className="container-logo logo-3">
                            <img src={logoResponsive} alt="" />
                        </div>
                        <h5>RESPONSIVE DESIGN</h5>
                        <p>I make every project responsive and mobile friendly to the users. Making layouts will automatically adjust and adapt to any device screen size.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
