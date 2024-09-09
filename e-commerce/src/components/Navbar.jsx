import React, { useState } from 'react';
import logo from "../assets/images/fashion.png";
import { HiShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { navlinks } from "../assets/assets";

export default function Navbar() {

    const [ open, setOpen ] = useState(false);
    const [ activeLink, setActiveLink ] = useState("");

    const handleClick = (title) => {
        setActiveLink(title);
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-navcolor">
                <div className='container flex justify-between items-center py-4'>
                    {/* Logo Section */}
                    <div className='md:text-2xl text-xl flex items-center gap-2 font-bold uppercase mr-6'>
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
                        <div className='text-2xl'>
                            <CiSearch />
                        </div>
                        <div className='text-2xl p-4'>
                            <PiShoppingCartThin />
                            <div className='absolute min-w-2.5 min-h-2.5 rounded-full bg-primary -mt-8 ml-5'></div>
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