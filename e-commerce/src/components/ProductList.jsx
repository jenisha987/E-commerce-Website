import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/products";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

export default function ProductList() {

    const handleToast = (title) => toast.success(`Added ${title}`);
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search)

    return (
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6">
                {
                    products.filter((product) => {
                        if (category === "All") {
                            return product.title.toLowerCase().includes(search.toLowerCase());
                        } else {
                            return( category === product.category.name &&
                            product.title.toLowerCase().includes(search.toLowerCase()));
                        }
                    }).map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            desc={product.description}
                            // rating={product.rating.rate}
                            img={product.images}
                            handleToast={handleToast}
                        />
                    ))
                }


                {/* products.map((product) => {
                    return (
                        
                    );
                }) */}

            </div>
        </>
    );
}
