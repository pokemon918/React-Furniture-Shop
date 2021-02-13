import React, { Component } from 'react'
import logo from '../images/UniQue.jpg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    state = {
        isOpen:false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt='Furniture' width="200vw" height="43vh" />
                        </Link>
                        <button
                            type='button'
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"}>
                        <li onClick={this.handleToggle}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={this.handleToggle}>
                            <Link to="/products">Products</Link>
                        </li>
                        <li onClick={this.handleToggle}>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li onClick={this.handleToggle}>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
