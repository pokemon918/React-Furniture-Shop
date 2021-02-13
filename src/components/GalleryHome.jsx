import React from 'react';
import Title from './Title'
import {Link} from 'react-router-dom'
import img1 from "../images/g1.jpeg";
import img2 from "../images/g2.jpeg";
import img3 from "../images/g3.jpeg";
import img4 from "../images/g4.jpeg";
import img5 from "../images/g6.jpg";
import img6 from "../images/g8.jpeg";
import img7 from "../images/g9.jpeg";
import img8 from "../images/g13.jpg";
import img9 from "../images/g12.jpeg";

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