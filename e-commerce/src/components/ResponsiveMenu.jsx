import React from 'react';
import { AnimatePresence } from 'framer-motion';

export default function responsiveMenu({ open }) {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-e-3xl'>
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>MobileApp</li>
                            <li>ContactUs</li>
                        </ul>
                    </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}