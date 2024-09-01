import React from 'react';
import logo from "../assets/images/fashion.png";

export default function Navbar() {

    const navlinks = [
        {
            id: 1,
            text: "home"
        },
        {
            id: 2,
            text: "menu"
        },
        {
            id: 3,
            text: "mobile-app"
        },
        {
            id: 4,
            text: "contact-us"
        },
    ]

    return (
        <div className="flex justify-between items-center shadow-lg w-full h-20 ">
            <img src={logo} alt="logo" className="md:w-40 h-40 w-32" />
            <nav className="hidden md:flex">
                {navlinks.map(({ id, text }) => (
                    <li key={id} className='px-4 list-none cursor-pointer capitalize font-medium hover:scale-90 duration-200'>
                        { text }
                    </li>
                ))}
            </nav>
        </div>
    )
}