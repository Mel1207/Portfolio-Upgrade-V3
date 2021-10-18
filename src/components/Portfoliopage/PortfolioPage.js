import React, { useEffect, useState } from 'react'
// import portfolio from '../../../studio/schemas/portfolio';
import sanityClient from "../../client"
import Navbar from '../Navbar'

const PortfolioPage = () => {
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolio"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`).then(data => setPortfolioData(data)).catch(console.error);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h3>Front end projects</h3>
                <div className="project-card">
                    {portfolioData && portfolioData.map((portfolio, index) => (
                        <article>
                            <h3 className="section-subheader">
                                <a href={portfolio.link} target="_blank" rel="noopener noreferrer" alt={portfolio.title}>{portfolio.title}</a>
                            </h3>
                            <div>
                                <span>published: { new Date(portfolio.date).toDateString()}</span>
                                <span>project type: {portfolio.projectType}</span>
                                <p>{portfolio.description}</p>
                                <span>button for link of project</span>
                                <h4>tech used</h4>
                                <span style={{
                                    padding: '1rem',
                                    color: 'red',
                                    background: 'green',
                                    borderRadius: '500px',
                                    display: 'block',
                                    width: 'max-content',
                                    margin: '0 1rem'

                                }}>{portfolio.tags.map(item => (
                                    <span>{item}</span>
                                ))}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PortfolioPage
