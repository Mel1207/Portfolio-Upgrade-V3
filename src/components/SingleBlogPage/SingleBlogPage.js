import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import { useParams } from 'react-router'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const SingleBlogPage = () => {
    const [singleBlog, setSingleBlog] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id, 
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then(data => setSingleBlog(data[0])).catch(console.error)
    }, [slug])
    

    if(!singleBlog) return <div><h1>Loading...</h1></div>

    return (
        <>
            <Navbar />
            <div className="blog-bg" style={{
                background: `url("${singleBlog.mainImage.asset.url}")`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                height: '60vh',
                width: '100%',
                }}>
            </div>
            <div className="container blog-container">
                <img className="blog-mainTop-img" src={singleBlog.mainImage.asset.url} />
                <div className="blog-body">
                    <BlockContent blocks={singleBlog.body} projectId="1x1zge2p" dataset="production"/>

                    <Link to="/blog/">Back to blogs</Link>
                </div>
                
            </div>
        </>
    )
}

export default SingleBlogPage
