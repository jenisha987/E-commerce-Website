import React from "react";
import Header from "../components/Header";
import ProductCategory from "../components/ProductCategory";
import ProductList from "../components/ProductList";
// import Cart from "../components/Cart";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <ProductCategory />
            <ProductList />
        </div>
    )
}