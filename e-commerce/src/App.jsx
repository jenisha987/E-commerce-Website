import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Success from "./pages/Success";
import Error from "./pages/Error";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
    </Route>
))

export default function App() {
    return (
        <div className="overflow-x-hidden">
            <RouterProvider router={router} />
        </div>
    )
}