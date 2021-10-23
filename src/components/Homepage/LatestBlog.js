import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import aboutBg from '../../img/aboutBg.png'
import sanityClient from '../../client'

const LatestBlog = () => {

    const [updatedBlog, setUpdatedBlog] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "latestPost"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            subHeader,
            date
        }`).then(data => setUpdatedBlog(data)).catch(console.error)
    }, []);


    return (
        <div className="latest-blog-section">
            <div className="container">
                <h2 className="section-header">My blog</h2>
                <h3 className="section-subheader">Check out my latest blog post</h3>

                {updatedBlog && updatedBlog.map((mainItem, index) => (
                    <div className="latest-blog-container" key={index}>
                        <div>
                            <img src={mainItem.mainImage.asset.url} alt="" />
                        </div>
                        <div>
                            <h3>{mainItem.title}</h3>
                            ajsd;flkajsdfl;kasd;fklajsdl;fjk
                            <Link to={"/blog/" + mainItem.slug.current} className="btn-small">Read more</Link>
                        </div>
                    </div>
                 ))} 
            </div>
        </div>
       
    )
}

export default LatestBlog
