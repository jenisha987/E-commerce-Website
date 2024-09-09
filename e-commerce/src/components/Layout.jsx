import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";

export default function Layout() {

    const [ activeCart, setActiveCart ] = useState(false);

    return (
        <div>
            <Navbar activeCart={activeCart} setActiveCart={setActiveCart} />
            <main>
               <Outlet /> 
               <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
            </main>
        </div>
    )
}