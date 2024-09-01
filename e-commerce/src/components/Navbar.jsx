import React, { useState } from 'react';
import logo from "../assets/images/fashion.png";
import { HiShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";

export default function Navbar() {

    const [ open, setOpen ] = useState(false);

    const navlinks = [
        {
            id: 1,
            title: "home"
        },
        {
            id: 2,
            title: "menu"
        },
        {
            id: 3,
            title: "MobileApp"
        },
        {
            id: 4,
            title: "contactUs"
        },
    ]

    return (
        <>
            <nav>
                <div className='container flex justify-between items-center py-8'>
                    {/* Logo Section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <HiShoppingBag />
                        <p>Fashion</p>
                        <p className='text-secondary'>Wear</p>
                    </div>
                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {
                                navlinks.map(({ id, title }) => (
                                    <li key={id} className='inline-block py-1 px-3 hover:text-primary font-semibold cursor-pointer capitalize'>
                                        {title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Icons Section */}
                    <div className='flex items-center gap-4'>
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <CiSearch />
                        </button>
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <PiShoppingCartThin />
                        </button>
                        <button className='hover:bg-primary text-primary font-semibold hover:text-white
                        rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
                            Login
                        </button>
                    </div>
                    {/* Mobile Hamburger Menu Section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>
        </>
    )
}