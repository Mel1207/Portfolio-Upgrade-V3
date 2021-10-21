import React, {useState, useEffect} from 'react'
import sanityClient from "../../client"
import iconLink from '../../img/icon-link.svg'
import iconLinkGithub from '../../img/nav-logoBlack-github.svg'

const Tabs = () => {
    const [portfolioData, setPortfolioData] = useState(null);
    const [designData, setDesignData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolio"]{
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
        }`).then(data => setPortfolioData(data)).catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "design"]{
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
            link
        }`).then(dataDesign => setDesignData(dataDesign)).catch(console.error);
    }, []);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>
            <div className="project-tabs">
                <button className={toggleState === 1 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(1)}>FRONT-END DESIGNS</button>
                <button className={toggleState === 2 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(2)}>UI/MOCKUP DESIGNS</button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <div className="project-card">
                    {portfolioData && portfolioData.map((portfolio, index) => (
                        <div className="project-container" key={index}>
                            <img src={portfolio.mainImage.asset.url} alt={portfolio.title} />
                            <div className="project-content">
                                <a href={portfolio.link} target="_blank" rel="noopener noreferrer" alt={portfolio.title} className="project-name">{portfolio.title}</a>
                                <span className="project-date">Published: <strong>{ new Date(portfolio.date).toDateString()}</strong></span>
                                <p className="project-description">{portfolio.description}</p>
                                <p className="project-tech">Technology used:</p>
                                <ul><li key={portfolio.tags}>{portfolio.tags}</li></ul>
                                <div className="project-navigation-links">
                                    <a href={portfolio.link} rel="noopener noreferrer" className="project-link"><img src={iconLink} alt="link"  />Website link</a>
                                    <a href={portfolio.repoLink} rel="noopener noreferrer" className="repository-link"><img src={iconLinkGithub} alt="link"  />Repository</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className="design-container">
                        {designData && designData.map((designItem, index) => (
                            <div key={index} className="design-card"> 
                                <img src={designItem.mainImage.asset.url} alt={designItem.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs
