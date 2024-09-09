import React from "react";
import { IoStar } from "react-icons/io5";

export default function ProductCard() {
    return (
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
            <img
                className="w-auto h-[250px] hover:scale-110 cursor-grab 
                transition-all duration-500 ease-in-out" 
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                alt="product" 
            />
            <div className="text-sm flex justify-between">
                <h2>Mens Bag</h2>
                <span className="text-primary">Rs.1800</span>
            </div>
            <p className="text-sm font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quos?</p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    <IoStar className="mr-1 text-yellow-400" /> 4.5
                </span>
                <button className="p-2 text-white bg-primary hover:bg-orange-700 rounded-lg text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}