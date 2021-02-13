import React from 'react';
import Title from './Title'
import { Link } from 'react-router-dom';

import img2 from "../images/room-1.jpeg";
import img4 from "../images/room-2.jpeg";
import img5 from "../images/room-3.jpeg";
import img7 from "../images/images/product-5.jpeg";
import img8 from "../images/images/product-6.jpeg";
import img9 from "../images/images/product-7.jpeg";

const GalleryHome = () => {
  return (
  	<>
  	<br/><br/><br/>
    <Title title="Products Glimpse" />
    <section className="section-meals">
		<ul className="meals-showcase clearfix">
			<li>
				<figure className="meal-photo">
					<img src={img8} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img2} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img9} alt="" />
				</figure>
			</li>
		</ul>
		<ul className="meals-showcase clearfix">
			<li>
				<figure className="meal-photo">
					<img src={img4} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img5} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img7} alt="" />
				</figure>
			</li>
		</ul>
		<br/><br/>
		<Link
            to="/gallery"
            className="btn-primary gallerybtn"
        >
            Explore
        </Link>
        <br/><br/>
	</section>
    </>
  )
}

export default GalleryHome;