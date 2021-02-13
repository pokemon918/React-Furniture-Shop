import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
    	<>
        <Hero>
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <Footer/>
        </>
    )
}

export default Error
