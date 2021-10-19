import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import aboutBg from '../../img/aboutBg.png'
import Navbar from '../Navbar'
import sanityClient from "../../client"


const BlogPage = () => {
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            subHeader
        }`).then(data => setPostData(data)).catch(console.error)
    })

    return (
        <>  
            <Navbar />
            <div className="about-bg" style={{
                background: `url("${aboutBg}")`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                height: '60vh',
                width: '100%',
                display: 'block'
            }}>
                <div className="container" style={{position: 'relative',height: '100%'}}>
                    <div className="page-title">
                        <h2 className="section-header">My Blogs</h2>
                        <h3 className="section-subheader">Take a time to read my blogs</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                {postData && postData.map((post, index) => (
                    <div key={index} >
                        <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                            <h3>{post.title}</h3>
                        </Link>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                        <div>
                            {post.subHeader}
                        </div>
                        <Link to={"/blog/" + post.slug.current} key={post.slug.current} className="btn">
                            Read blog
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogPage
