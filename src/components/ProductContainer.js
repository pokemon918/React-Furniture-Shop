import React from 'react'
import ProductsFilter from './ProductFilter'
import ProductsList from './ProductList'
import { withProductConsumer } from '../context';
import Loading from './Loading'

// With Higher order component -- getting state from hoc

const ProductContainer = ({context}) => {
    const { loading, sortedProducts, products } = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <ProductsFilter products={products} />
            <ProductsList products={sortedProducts} />
        </>
    )
}

export default withProductConsumer(ProductContainer);





// With ProductConsumer rendering

// const ProductContainer = () => {    
//     return (
//         <ProductConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedProducts, products } = value;
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             hello from products container
//                             <ProductsFilter prodcuts={products} />
//                             <ProductsList products={sortedProducts} />
//                         </div>
//                     )
//                 }
//             }
//         </ProductConsumer>
//     )
// }

// export default ProductContainer
