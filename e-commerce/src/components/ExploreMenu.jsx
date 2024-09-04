import React from "react";
import { menu_list } from "../assets/assets";

export default function ExploreMenu() {
    return (
        <div className="" id="explore-menu">
            <h1>Explore Our Latest Products</h1>
            <div>
                {
                    menu_list.map(({ id, menu_image, menu_name }) => {
                        return (
                            <div key={id}>
                                <img src={menu_image} alt="menu" />
                                <p>{menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}