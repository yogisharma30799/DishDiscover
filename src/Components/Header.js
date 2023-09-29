import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <img className='logo' src="logo192.png" alt="" />
            <div className="nav__list">
                <ul className="nav__list-items">
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </header>)
}

export default Header