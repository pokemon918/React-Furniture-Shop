import React, { useContext } from 'react';
import { ProductContext } from '../context';
import Title from './Title'

// get all unique values 
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
const ProductFilter = ({products}) => {
    const context = useContext(ProductContext)
    const { handleChange, type, price, minPrice, maxPrice } = context;
    
    let types = getUnique(products, "type");
    // for all 
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ))

    return (
        <section className="filter-container">
            <Title title="search products" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">product type</label>
                <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    className="form-control"
                    value={type}
                >
                    {types}
                </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">product price ₹{price}</label>
                    <input
                        type='range' 
                        name='price'
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                        />
                </div>
            </form>
        </section>
    )
}

export default ProductFilter
