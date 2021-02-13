import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<Link to="/contact" className="btn-primary">Contact Us</Link>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt.</p>
			<p>Call At: XXXXXXXXXX</p>
			<p>Copyright© 2021 by Unique Furniture. <br/>All rights reserved.</p>
		</footer>
	)
}

export default Footer;