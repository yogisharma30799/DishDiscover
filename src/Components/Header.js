import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <img className='logo' src="logo192.png" alt="" />
            <div className="nav__list">
                <ul className="nav__list-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                
                </ul>
            </div>
        </header>)
}

export default Header