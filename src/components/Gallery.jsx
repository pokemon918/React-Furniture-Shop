import React from 'react';
import Title from './Title'
// import img1 from "../images/room-1.jpeg";
// import img2 from "../images/room-2.jpeg";
// import img3 from "../images/room-3.jpeg";
// import img4 from "../images/images/product-5.jpeg";
// import img5 from "../images/images/product-6.jpeg";
// import img6 from "../images/images/product-7.jpeg";
// import img7 from "../images/images/product-8.jpeg";
// import img8 from "../images/room-8.jpeg";
import img1 from "../images/g1.jpeg";
import img2 from "../images/g2.jpeg";
import img3 from "../images/g3.jpeg";
import img4 from "../images/g4.jpeg";
import img5 from "../images/g6.jpg";
import img6 from "../images/g8.jpeg";
import img7 from "../images/g9.jpeg";
import img8 from "../images/g10.jpeg";
import img9 from "../images/g12.jpeg";
import img10 from "../images/g13.jpg";
// import img8 from "../images/room-8.jpeg";

const Gallery = () => {
  return (
  	<>
    <Title title="Gallery" />
    <section className="section-meals">
		<ul className="meals-showcase clearfix">
			<li>
				<figure className="meal-photo">
					<img src={img1} alt="" />
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
					<img src={img6} alt="" />
				</figure>
			</li>
		</ul>
		<ul className="meals-showcase clearfix">
			<li>
				<figure className="meal-photo">
					<img src={img7} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img10} alt="" />
				</figure>
			</li>
			<li>
				<figure className="meal-photo">
					<img src={img3} alt="" />
				</figure>
			</li>
		</ul>
	</section>
    </>
  )
}

export default Gallery;