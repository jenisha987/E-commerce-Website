import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
    </Route>
))

export default function App() {
    return (
        <div className="overflow-x-hidden">
            <RouterProvider router={router} />
        </div>
    )
}