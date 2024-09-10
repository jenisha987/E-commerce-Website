import React, { useEffect, useState } from "react";
import { products } from "../assets/products";
import { useDispatch } from "react-redux";
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

    return (
        <div>
            <h3 className="text-3xl font-semibold">Explore Our Products</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden ">
                {
                    categories.map((category, index ) => (
                        <button 
                            onClick={() => dispatch(setCategory(category))}
                            key={index} 
                            className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-primary hover:text-white"
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}