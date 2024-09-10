import React from "react";
import Header from "../components/Header";
import ProductCategory from "../components/ProductCategory";
import ProductList from "../components/ProductList";

export default function Home() {
    return (
        <div name="home" className="container">
            <Header />
            <ProductCategory />
            <ProductList />
        </div>
    )
}