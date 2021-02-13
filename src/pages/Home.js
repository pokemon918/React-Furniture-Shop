import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import GalleryHome from '../components/GalleryHome'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedProducts from '../components/FeaturedProducts'
import { FaRegCommentDots } from 'react-icons/fa';
import { GrConnect } from "react-icons/gr";
import { FcSupport } from 'react-icons/fc'
import { AiFillHeart } from 'react-icons/ai';

const services = [
    {
        icon: <FcSupport />,
        title: "Support",
        info: "We Support our customers at every step from the point they connect with us."
    }, {
        icon: <AiFillHeart />,
        title: "We Care for you",
        info: "We provide best products to our customers."
    }, {
        icon: <GrConnect />,
        title: "Connect with Us",
        info: "We Welcome you to connect with us through various social media networks."
    }
    , {
        icon: <FaRegCommentDots/>,
        title: "Give Feedback",
        info: "We would love to recieve your valuable feedback which will help us improve."
    }
]


const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="UNIQUE FURNITURE"
                    subtitle="deluxe furniture at best price">
                    <Link
                        to="/products"
                        className="btn-primary"
                    >
                        Our Products
                    </Link>
                </Banner>
            </Hero>   
            <Services services={services} title="Services"/>
            <FeaturedProducts />
            <GalleryHome />
            <Footer/>
        </>
    )
}

export default Home
