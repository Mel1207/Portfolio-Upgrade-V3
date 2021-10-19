import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const SingleBlogPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                
                <h1>THIS IS SINGLE BLOG PAGE</h1>
                <Link to="/blog/">Back to blogs</Link>
            </div>
        </>
    )
}

export default SingleBlogPage
