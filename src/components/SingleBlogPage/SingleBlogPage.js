import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import aboutBg from '../../img/aboutBg.png'

const SingleBlogPage = () => {
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
            }}></div>
            <div className="container">
                <h1>THIS IS SINGLE BLOG PAGE</h1>
                <Link to="/blog/">Back to blogs</Link>
            </div>
        </>
    )
}

export default SingleBlogPage
