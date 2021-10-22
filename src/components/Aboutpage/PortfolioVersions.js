import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import iconLink from '../../img/icon-link.svg'
import iconLinkGithub from '../../img/nav-logoBlack-github.svg'

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
                <h2 className="section-header">Previous versions</h2>
                <h3 className="section-subheader">Checkout my porfolio versions</h3>
                
                <div >
                    {portfolioVer && portfolioVer.map((pVersions, index) => (
                        <div key={index} className="portfolioVer-continer">
                            <img src={pVersions.mainImage.asset.url} alt={pVersions.title} />
                            <div className="portfolioVer-content">
                                <a href={pVersions.link} target="_blank" rel="noopener noreferrer" alt={pVersions.title} className="project-name">{pVersions.title}</a>
                                <span className="project-date">Published: <strong>{ new Date(pVersions.date).toDateString()}</strong></span>
                                <p className="project-description">{pVersions.description}</p>
                                <p className="project-tech">Technology used:</p>
                                <ul><li key={pVersions.tags}>{pVersions.tags}</li></ul>
                                <div className="project-navigation-links">
                                    <a href={pVersions.link} rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="project-link"><img src={iconLink} alt="link"  />Website link</a>
                                    <a href={pVersions.repoLink} rel="noopener noreferrer" className="repository-link"><img src={iconLinkGithub} alt="link"  />Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default PortfolioVersions
