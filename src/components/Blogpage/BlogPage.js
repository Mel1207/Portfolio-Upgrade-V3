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
            subHeader,
            date
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
                <div className="blogs-section">
                    {postData && postData.map((post, index) => (
                        <div key={index} className="blogs-card">
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="blog-main-img"/>
                            <div className="blogs-content">
                                <div className="blogs-box-top">
                                    <Link to={"/blog/" + post.slug.current} key={post.slug.current}><h4 className="blogs-title">{post.title}</h4></Link>
                                    <span className="blogs-date">{`${new Date(post.date).getMonth() + 1}/${new Date(post.date).getDate()}/${new Date(post.date).getFullYear()}`}</span>
                                    <div className="blogs-subheader"><p>{post.subHeader}</p></div>
                                </div>
                                <Link to={"/blog/" + post.slug.current} className="btn-small">Read blog</Link>
                            </div>  
                           
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage
