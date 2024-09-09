import React from "react";
import Header from "../components/Header";
import ProductCategory from "../components/ProductCategory";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <ProductCategory />
        </div>
    )
}