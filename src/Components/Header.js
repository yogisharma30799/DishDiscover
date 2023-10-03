import React from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

function Header() {
    const  isOnline  = useOnline()
    return (
        <header className="flex justify-between bg-black text-cyan-500">
            <img className='h-16 p-2' src="logo192.png" alt="logo" />
            <div className="nav__list">
                <ul className="py-5 flex">
                    <li className='px-2'><Link to="/">Home</Link></li>
                    <li className='px-2'><Link to="/about">About</Link></li>
                    <li className='px-2'><Link to="/contact">Contact</Link></li>
                    <li className='px-2'><Link to="/instamart">InstaMart</Link></li>
                    <li className='px-2'><Link>Cart</Link></li>
                    <p>{ isOnline ? "🟢" : "🔴"}</p>
                </ul>
            </div>
                <button>Login</button>
        </header>)
}

export default Header