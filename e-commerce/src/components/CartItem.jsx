import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function CartItem() {
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
            <MdDelete size={18} className="absolute right-7 text-gray-800 cursor-pointer" />
            <img 
                src="https://i.imgur.com/QkIa5tT.jpeg" 
                alt="CartItem" 
                className="w-[50px] h-[50px]"
            />
            <div className="leading-5">
                <h2 className="font-bold text-gray-800">T-shirt</h2>
                <div className="flex">
                    <span className="text-primary font-semibold">Rs.1800</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7">
                        <AiOutlinePlus size={20} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-primary 
                            hover:border-none rounded-full p-1 text-xl transition-all ease-linear cursor-pointer" />
                        <span>1</span>
                        <AiOutlineMinus size={20} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-primary 
                            hover:border-none rounded-full p-1 text-xl transition-all ease-linear cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}