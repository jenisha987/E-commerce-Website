import React from "react";
import { category } from "../assets/assets";
import { menu_list } from "../assets/assets";

export default function ProductCategory() {
    return (
        <div>
            <h3 className="text-3xl font-semibold">Explore Our Products</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden ">
                {
                    category.map(({ id, category }) => (
                        <button key={id} className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">{category}</button>
                    ))
                }
                {/* <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">All</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Men</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Women</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Kids</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Men</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Women</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Kids</button> */}
            </div>
        </div>
    )
}