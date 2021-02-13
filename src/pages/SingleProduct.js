import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {ProductContext} from '../context'
import StyledHero from '../components/StyledHero'
import Footer from '../components/Footer'

export class SingleProduct extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		}
	}

	componentDidMount() {
        window.scrollTo(0, 0);
    }
	
	static contextType = ProductContext;

    render() {
    	const { getProduct } = this.context;
    	const product = getProduct(this.state.slug)
    	if(!product) {
    		return (
    			<div className="error">
    				<h3>no such product can be found...</h3>
    				<Link to="/products" className="btn-primary">
    					back to Products
    				</Link>
    			</div>	
			)
    	}

		const { name, description, price, images } = product;
		const [mainImg, ...defaultImg] = images
        return (
            <>
				<StyledHero img={mainImg || this.state.defaultBcg}>
					<Banner title={`${name}`}>
						<Link to="/products" className="btn-primary">
							back to products
						</Link>
					</Banner>
				</StyledHero>
				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((item, index) => (
							<img src={item} key={index} alt={name} />
						))}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>info</h3>
							<h6>price : ₹{price}</h6>
						</article>
					</div>
				</section>
				<Footer/>
            </>
        )
    }
}

export default SingleProduct
