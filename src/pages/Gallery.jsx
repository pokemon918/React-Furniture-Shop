import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import GalleryComponent from '../components/Gallery'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Gallery = () => {

    useEffect(() => {
    window.scrollTo(0, 0)
    });
    
    return (
    	<>
        <Hero hero="galleryHero">
            <Banner title="Gallery" subtitle="Astonishing Products">
                <Link to="/products" className="btn-primary">Our Products</Link>
            </Banner>
        </Hero>
        <br/><br/><br/>
        <GalleryComponent />
        <Footer/>
        </>
    )
}

export default Gallery
