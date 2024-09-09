import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart({ activeCart, setActiveCart }) {

    const cartItems = useSelector(state => state.cart.cart);

    return (
        <>
            <div className={`fixed right-0 top-0 w-full md:w-[32vw] lg:w-[18vw] h-full p-5 bg-white
                ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-semibold text-gray-800">My Order</span>
                    <IoMdCloseCircle onClick={() => setActiveCart(!activeCart)}  size={25} className="hover:text-red-600 cursor-pointer" />
                </div>

                {
                    cartItems.length > 0 ?cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id} 
                                id={item.id} 
                                name={item.title} 
                                price={item.price}
                                img={item.img}
                                qty={item.qty}
                            />
                        )
                    }) : <h2 className="text-center text-xl font-semibold text-gray-800">Your cart is empty</h2>
                }
                
                <div className="absolute bottom-0">
                    <h3 className="font-semibold text-gray-800">Items : 1</h3>
                    <h3 className="font-semibold text-gray-800">Total Amount: Rs.100</h3>
                    <hr className="my-2" />
                    <button className="bg-primary md:w-[28vw] w-[86vw] lg:w-[16vw] font-bold px-20 text-white py-2 rounded-lg mb-8">Checkout</button>
                </div>
            </div>

        </>
    )
}