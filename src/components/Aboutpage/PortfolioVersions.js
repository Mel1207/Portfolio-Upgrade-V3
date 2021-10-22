import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'

const PortfolioVersions = () => {
    const [portfolioVer, setPortfolioVer] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_]`)
    })

    return (
        <div className="portfolio-version-section">
            <div className="container">
                <h2 className="section-header">Portfolio</h2>
                <h3 className="section-subheader">Take a look at my projects</h3>
                <h1>this is portfolio collections</h1>
            </div>
        </div>
    )
}

export default PortfolioVersions
