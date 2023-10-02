import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

function Header() {
    const  isOnline  = useOnline()
    return (
        <header className="header">
            <img className='logo' src="logo192.png" alt="" />
            <div className="nav__list">
                <ul className="nav__list-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    <h1>{ isOnline ? "yes" : "no"}</h1>
                </ul>
            </div>
        </header>)
}

export default Header