import React from "react";
import { IoStar } from "react-icons/io5";

export default function ProductCard() {
    return (
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg">
            <img
                className="w-auto h-[250px] hover:scale-110 cursor-grab 
                transition-all duration-500 ease-in-out" 
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                alt="product" 
            />
            <div>
                <h2>Mens Bag</h2>
                <span>Rs. 1800</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quos?</p>
            <div>
                <span>
                    <IoStar /> 4.5
                </span>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}