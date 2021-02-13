import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no product matched your search parameters.</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {products.map(item => {
                    return <Product key={item.id} product={item}/>
                })}
            </div>
        </section>
    )
}

export default ProductList
