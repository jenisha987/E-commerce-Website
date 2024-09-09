import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/products";

export default function ProductList() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        {/* // <div className="flex flex-wrap gap-10 justify-center xl:justify-start my-10"> */}
            {
                products.map((product) => {
                    return (
                        <ProductCard 
                            key={product.id} 
                            id={product.id} 
                            title={product.title} 
                            price={product.price} 
                            desc={product.description}
                            rating={product.rating.rate}
                            img={product.image}
                        />
                    )
                })
            }
        </div>
    )
}