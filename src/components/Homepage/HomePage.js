import React from 'react'
import Navbar from '../Navbar'
import Header from './Header'
import LatestBlog from './LatestBlog'
import Section1 from './Section-1'
import Section2 from './Section-2'

const HomePage = () => {
    // console.log(props.isExact)
    return (
        <>
            <Navbar isExact={true} />
            <Header />
            <Section1 />
            <Section2 />
            <LatestBlog />
        </>
    )
}

export default HomePage
