import React from "react";
import { IoStar } from "react-icons/io5";

export default function ProductCard({ id, title, price, desc, img, rating }) {
    return (
        <div className="font-bold lg:w-[250px] w-[180px] md:w-[220px] bg-white p-5 flex flex-col rounded-lg gap-2">
            <img
                className="lg:w-auto lg:h-[250px] h-[150px] md:h-[200px] hover:scale-110 cursor-grab 
                transition-all duration-500 ease-in-out" 
                src={img}
                alt="product" 
            />
            <div className="text-sm flex justify-between">
                <h2>{title}</h2>
                <span className="text-primary">Rs.{price}</span>
            </div>
            <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    <IoStar className="mr-1 text-yellow-400" /> {rating}
                </span>
                <button className="p-2 text-white bg-primary hover:bg-orange-700 rounded-lg text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}