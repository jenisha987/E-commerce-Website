import React, { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

export default function CartToogle() {
    const [activeCart, setActiveCart] = useState(false);

    return (
        <>
            <Navbar activeCart={activeCart} setActiveCart={setActiveCart} />
            <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
        </>
    );
}
