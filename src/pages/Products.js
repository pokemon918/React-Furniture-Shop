import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import ProductContainer from '../components/ProductContainer'
import Footer from '../components/Footer'

const Products = () => {

    useEffect(() => {
    window.scrollTo(0, 0)
    });
    
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Products">
                    <Link to="/contact" className="btn-primary">Contact Us</Link> 
                </Banner>
            </Hero>
            <ProductContainer/>
            <Footer/>
        </>
    )
}

export default Products
