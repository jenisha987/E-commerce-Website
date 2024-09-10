import React, { useEffect, useState } from "react";
import { products } from "../assets/products";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

export default function ProductCategory() {

    const [ categories, setCategories ] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [
           ...new Set(products.map((product) => product.category.name)) //Set le dherai same xa vani aauta matra dinxa
        ]
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);

    return (
        <div className="lg:mt-28 md:-mt-20 -mt-20">
            <h3 className="text-3xl font-semibold">Explore Our Products</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden ">
                <button 
                    onClick={() => dispatch(setCategory("All"))}
                    className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-primary hover:text-white ${selectedCategory === "All" && "bg-primary text-white"}`}
                >
                    All
                </button>
                {
                    categories.map((category, index ) => (
                        <button 
                            onClick={() => dispatch(setCategory(category))}
                            key={index} 
                            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-primary hover:text-white ${selectedCategory === category && "bg-primary text-white"}`}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}