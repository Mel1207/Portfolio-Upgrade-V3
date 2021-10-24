import React from 'react'
import Object1 from '../../img/img-object.png'
// comment

const Section1 = () => {
    return (
        <div className="section-1" id="section-1">
            <div className="container grid">
                <div className="left-aside">
                    <div>
                        <img src={Object1} alt="Design 1" className="object-1"/>
                        {/* <img src={Object2} alt="Design 2" className="object-2"/>   */}
                    </div>
                </div>
                <div className="right-aside">
                    <h2 className="section-header">What I Do ?</h2>
                    <h1>I DESIGN AND BUILD BEAUTIFUL WEBSITES</h1>
                </div>
            </div>
        </div>
    )
}

export default Section1
