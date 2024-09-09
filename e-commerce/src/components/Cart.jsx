import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Cart() {
    return (
        <>
            <div className="fixed right-0 top-0 w-full md:w-[32vw] lg:w-[20vw] h-full p-5 bg-white">
                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-semibold text-gray-800">My Order</span>
                    <IoMdCloseCircle size={25} className="hover:text-red-600 cursor-pointer" />
                </div>

                <div className="absolute bottom-0">
                    <h3>Items : 1</h3>
                    <h3>Total Amount: $100</h3>
                    <hr className="my-2" />
                    <button className="bg-primary md:w-[28vw] w-[85vw] lg:w-[18vw] font-bold px-20 text-white py-2 rounded-lg mb-8">Checkout</button>
                </div>
            </div>

        </>
    )
}