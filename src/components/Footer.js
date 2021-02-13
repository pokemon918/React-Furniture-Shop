import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<Link to="/contact" className="btn-primary">Contact Us</Link>
			<p>100 Feet Rd, Sant Nagar, Burari, Delhi, 110084, India</p>
			<p>Call At: 9810226266</p>
			<p>Copyright© 2018 by Unique Furniture. <br/>All rights reserved.</p>
		</footer>
	)
}

export default Footer;