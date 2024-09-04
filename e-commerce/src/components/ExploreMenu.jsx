import React from "react";
import { menu_list } from "../assets/assets";

export default function ExploreMenu() {
    return (
        <div className="flex flex-col gap-5" id="explore-menu">
            <h1 className="md:text-4xl text-2xl font-bold">Explore Our Latest Products</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-6 text-center">
                {
                    menu_list.map(({ id, menu_image, menu_name }) => {
                        return (
                            <div key={id}>
                                <img src={menu_image} alt="menu" className="h-60" />
                                <p>{menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}