import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

export default function ProductCard({ id, title, price, desc, img, rating, handleToast }) {

    const dispatch = useDispatch();

    // const [] = useState("");

    return (
        <div className="font-bold w-full max-w-xs bg-white p-4 flex flex-col rounded-lg gap-3 shadow-md">
            <img
                className="w-full md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
                src={img}
                alt={title}
            />
            <div className="text-sm flex justify-between items-center">
                <h2 className="truncate w-2/3">{title}</h2>
                <span className="text-primary">Rs.{price}</span>
            </div>
            <p className="text-xs font-normal text-gray-600">{desc.slice(0, 50)}...</p>
            <div className="flex justify-between items-center">
                <span className="flex items-center">
                    <IoStar className="mr-1 text-yellow-400" /> {rating}
                </span>
                <button onClick={() => {
                    dispatch(addToCart({ id, title, price, img, qty: 1 }))
                    handleToast(title);
                }} className="p-2 text-white bg-primary hover:bg-orange-700 rounded-lg text-xs">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
