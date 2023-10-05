import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const isOnline = useOnline()
    const { user } = useContext(UserContext);
    const cartItems = useSelector((store => store.cart.items));



    console.log("cart", cartItems);


    return (
        <header className="flex justify-evenly bg-teal-50 text-black font-bold h-20 divide-solid border-b border-black shadow-md z-50 items-center sticky">
            <img className='h-20 p-2' src="logo192.png" alt="logo" />
            <div className="nav__list">
                <ul className="py-5 flex">
                    <li className='px-3'><Link to="/">Home</Link></li>
                    <li className='px-3'><Link to="/about">About</Link></li>
                    <li className='px-3'><Link to="/contact">Contact</Link></li>
                    <li className='px-3'><Link to="/instamart">InstaMart</Link></li>
                    <li
                        className='sm:mr-7 md:mr-24 lg:mr-32 flex gap-1 relative items-center pl-7 font-medium text-base '>
                        <Link
                            to='/cart'>
                            <span
                                className='absolute top-1/2 left-0 -translate-y-1/2'>
                                <svg
                                    className='fill-white stroke-[#282c3f] relative stroke-2'
                                    viewBox="-1 0 37 32"
                                    height="20"
                                    width="20"
                                    fill="#686b78">
                                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                                </svg>
                                <span
                                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold'>{cartItems.length}
                                </span>
                            </span>
                            <span>Cart</span>
                        </Link>
                    </li>                </ul>
            </div>
            <div className='flex'>
                <p>{user.name}</p>
                <p className='text-xs'>{isOnline ? "🟢" : "🔴"}</p>
            </div>
            <button>Login</button>
        </header>)
}

export default Header