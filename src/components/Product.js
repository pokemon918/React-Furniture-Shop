import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

const Product = ({product}) => {
    const { name, slug, images, price } = product;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="Product" />
                <div className="price-top">
                    <h6>₹{price}</h6>
                    <p>per piece</p>
                </div>
                <Link
                    to={`/products/${slug}`}
                    className="btn-primary room-link"
                >
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

export default Product

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
