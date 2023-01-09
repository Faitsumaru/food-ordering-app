import { Link } from 'react-router-dom';
import logo from '../assets/images/foody.png';
import cartIcon from '../assets/icons/cart.svg';
import { useNavigate } from 'react-router-dom';
import Button from "./elements/Button";
import { useEffect, useState } from 'react';


export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () =>  {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User ID');
        window.dispatchEvent(new Event('storage'))
        navigate('/');
        // window.location.reload(true);
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token)
                setIsLoggedIn(true);
            else 
                setIsLoggedIn(false);
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])
    
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
                <Link to="/cart" className='mr-4 relative'>
                    <img src={ cartIcon } alt="cart" />
                    { cartCount > 0 ? <div className='rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-3 drop-shadow'>{ cartCount }</div> : null }
                </Link>
                {
                    isLoggedIn ?
                    <>
                        <Button onClick={handleLogout}>Log Out</Button>
                    </> :
                    <>
                        <Link to="/login" className='hover:text-yellow-400 transition ease-in duration-300'>Log In</Link>
                        <Link to="/register" className='hover:text-yellow-400 transition ease-in duration-300'>Sign Up</Link>
                    </>
                }
            </div>
        </div>
    </nav>

  )
}