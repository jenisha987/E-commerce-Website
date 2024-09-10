import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/products";
import toast, { Toaster } from 'react-hot-toast';

export default function ProductList() {
    const handleToast = (title) => toast.success(`Added ${title}`);
    return (
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6">
                {products.map((product) => {
                    return (
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
                    );
                })}
            </div>
        </>
    );
}
