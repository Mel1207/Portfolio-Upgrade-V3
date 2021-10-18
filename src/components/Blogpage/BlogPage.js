import React, { useState, useEffect } from 'react'
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
            <div className="container">
                <h1>THIS IS BLOG PAGE</h1>
            </div>
            
        </>
       
    )
}

export default BlogPage
