import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/products";

export default function ProductList() {
    return (
        <div>
            {
                products.map((product) => {
                    return <ProductCard key={product.id} />
                })
            }
        </div>
    )
}