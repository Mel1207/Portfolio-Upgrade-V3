import React, { useState, useEffect } from 'react'
import aboutBg from '../../img/aboutBg.png'
import Navbar from '../Navbar'
// import sanityClient from "../../client"

const BlogPage = () => {
    // const [postData, setPost] = useState(null)

    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "post"]{
    //         title, 
    //         slug,
    //         mainImage
    //     }`)
    // })

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
                <h1>THIS IS BLOG PAGE</h1>
            </div>
            
        </>
       
    )
}

export default BlogPage
