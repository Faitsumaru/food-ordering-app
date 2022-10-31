import React from 'react' //shortcut: 'rafce'

import { Link } from 'react-router-dom';

import logo from '../assets/images/foody.png';
import cartIcon from '../assets/icons/cart.svg';


export const Header = () => {
  return (

    <nav id='header' className='bg-black text-white'>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="header__logo-wrapper pl-4 flex items-center">
                <Link to="/" className='toggleColor text-white no-underline hover:no_underline font-bold text-2xl lg:text-4xl'>
                    <img src={ logo } alt="logo" className='w-40 h-40 object-cover'/>
                </Link>
            </div>

            <div className="header__nav-menu-wrapper flex items-center justify-between space-x-14">
                <Link to="/" className='text-xl hover:text-yellow-400 transition ease-in duration-300'>Home</Link>
                <Link to="#about" className='text-xl hover:text-yellow-400 transition ease-in duration-300'>About</Link>
            </div>

            <div className="header__nav-auth-wrapper flex items-center justify-center space-x-8">
                <Link to="/cart">
                    <img src={ cartIcon } alt="cart" />
                </Link>
                <Link to="/login" className='hover:text-yellow-400 transition ease-in duration-300'>Log In</Link>
                <Link to="/register" className='hover:text-yellow-400 transition ease-in duration-300'>Sign Up</Link>
            </div>
        </div>
    </nav>

  )
}