import React, {useState, useEffect} from 'react'
import sanityClient from "../../client"

const Tabs = () => {
    const [portfolioData, setPortfolioData] = useState(null);

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
            tags
        }`).then(data => setPortfolioData(data)).catch(console.error);
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
                                {/* <span>project type: {portfolio.projectType}</span> */}
                                <p className="project-description">{portfolio.description}</p>
                                <p className="project-tech">Technology used:</p>
                                <span>button for link of project</span>
                                
                                {/* <span style={{
                                    padding: '1rem',
                                    color: 'red',
                                    background: 'green',
                                    borderRadius: '500px',
                                    display: 'block',
                                    width: 'max-content',
                                    margin: '0 1rem'

                                }}>{portfolio.tags.map(item => (
                                    <span>{item}</span>
                                ))}</span> */}
                                
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h1>content2</h1>
                </div>
            </div>
        </>
    )
}

export default Tabs
