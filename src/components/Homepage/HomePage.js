import React from 'react'
import Navbar from '../Navbar'
import Header from './Header'
import Section1 from './Section-1'
import Section2 from './Section-2'

const HomePage = () => {
    // console.log(props.isExact)
    // console.log(props.match.isExact)
    return (
        <>
            <Navbar isExact={true} />
            <Header />
            <Section1 />
            <Section2 />
        </>
    )
}

export default HomePage
