import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'

const PortfolioVersions = () => {
    const [portfolioVer, setPortfolioVer] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolioVer"]{
            title,
            date,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            projectType,
            link,
            repoLink,
            tags
        }`).then(data => setPortfolioVer(data)).catch(console.error);
    }, []);

    return (
        <div className="portfolio-version-section">
            <div className="container">
                <h2 className="section-header">Portfolio</h2>
                <h3 className="section-subheader">Take a look at my projects</h3>
                
                <div className="portfolioVer-continer">
                    {portfolioVer && portfolioVer.map((pVersions, index) => (
                        <div>
                            <h3>{pVersions.title}</h3>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default PortfolioVersions
