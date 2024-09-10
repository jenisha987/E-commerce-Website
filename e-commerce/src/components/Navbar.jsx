import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { HiShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { navlinks } from "../assets/assets";
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

export default function Navbar({ activeCart, setActiveCart }) {

    const [ open, setOpen ] = useState(false);
    const [ activeLink, setActiveLink ] = useState("");
    const [ searchOpen, setSearchOpen ] = useState(false);

    const cartItems = useSelector(state => state.cart.cart);
    const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

    const handleClick = (title) => {
        setActiveLink(title);
    }

    const handleSearchToogle = () => {
        setSearchOpen(!searchOpen);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-navcolor">
                <div className='container flex justify-between items-center py-4'>
                    {/* Logo Section */}
                    <div onClick={() => navigate("/")} className='md:text-2xl text-xl flex items-center cursor-pointer gap-2 font-bold uppercase mr-6'>
                        <HiShoppingBag />
                        <p>Fashion</p>
                        <p className='text-secondary'>Wear</p>
                    </div>
                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4 text-gray-600'>
                            {
                                navlinks.map(({ id, title }) => (
                                    <li key={id} onClick={() => handleClick(title)} className={`inline-block py-1 px-3 hover:text-primary font-semibold cursor-pointer capitalize ${activeLink === title ? 'underline underline-offset-4 decoration-primary decoration-2' : ''}`}>
                                        {title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Icons Section */}
                    <div className='flex items-center cursor-pointer'>
                        <div className='text-2xl' onClick={handleSearchToogle}>
                            <CiSearch />
                        </div>
                        {
                            searchOpen && (
                                <input
                                    type="search"
                                    name="search"
                                    id=""
                                    placeholder="Search..."
                                    autoComplete='off'
                                    onChange={(e) => dispatch(setSearch(e.target.value))}
                                    className="absolute bg-navcolor top-14 left-0 w-full md:w-auto md:left-auto  md:right-52 lg:right-6 border p-2 rounded-md shadow-md transition-all duration-300"
                                />
                            )
                        }
                        <div className='text-2xl p-4'>
                            <PiShoppingCartThin onClick={() => setActiveCart(!activeCart)} className={`${cartCount > 0 && 'animate-bounce delay-500 transition-all'}`} />
                            <div className='absolute flex w-5 h-5 justify-center items-center text-sm rounded-full bg-primary -mt-10 ml-3'>
                                { cartCount }
                            </div>
                        </div>
                        <button className='hover:bg-primary text-primary font-semibold hover:text-white
                        rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
                            Login
                        </button>
                    </div>
                    {/* Mobile Hamburger Menu Section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl cursor-pointer' />
                    </div>
                </div>
            </nav>
            <ResponsiveMenu open={open} />
        </>
    )
}