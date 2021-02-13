import React, { Component } from 'react'
import items from './data'
import Client from './Contentful'

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        featuredProducts: [],
        loading: true,
        type: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0
    }

    // getData = async () => {
    //     try {
    //         let response = await Client.getEntries({
    //             content_type: "uniqueFurniture",
    //             // order: 'sys.createdAt'
    //             order: '-fields.price'
    //         })
    //         let products = this.formatData(response.items)
    //         let featuredProducts = products.filter(product => product.featured === true)
    //         let maxPrice = Math.max(...products.map(item => item.price))

    //         this.setState({
    //             products,
    //             featuredProducts,
    //             sortedProducts: products,
    //             loading: false,
    //             price: maxPrice,
    //             maxPrice
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    componentDidMount() {
        // -----contentful data-------------
        // this.getData();

        // -------Local data-------------
        let products = this.formatData(items)
        let featuredProducts = products.filter(product => product.featured === true)
        let maxPrice = Math.max(...products.map(item => item.price))

        this.setState({
            products,
            featuredProducts,
            sortedProducts: products,
            loading: false,
            price: maxPrice,
            maxPrice
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)

            let products = { ...item.fields, images, id };
            return products
        })
        return tempItems
    }

    getProduct = (slug) => {
        let tempItems = [...this.state.products];
        const product = tempItems.find((product) => product.slug === slug);
        return product;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState(
        {
            [name]: value
        },
        this.filterProducts
        );
    } 

    filterProducts = () => {
        let { products, type, price } = this.state;

        let tempProducts = [...products]
        price = parseInt(price)
        // filter by type
        if (type !== 'all') {
            tempProducts = tempProducts.filter(product => product.type === type)
        }

        // filter by price
        tempProducts = tempProducts.filter(product => product.price <= price)
        this.setState({
            sortedProducts: tempProducts
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    getProduct: this.getProduct,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

// Higher Order Component -- Providing props and value as context to component
export function withProductConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <ProductConsumer>
                {value => <Component {...props} context={value}/>}
            </ProductConsumer>
        )
    }
}


export { ProductConsumer, ProductContext, ProductProvider};