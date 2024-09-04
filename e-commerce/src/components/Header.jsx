import React from "react";

export default function Header() {
    return (
        <div className="mt-6 text-white container bg-[url('./assets/images/17496.jpg')] min-h-[400px] lg:bg-cover bg-contain md:min-h-[650px] bg-no-repeat">
            <div className="absolute flex flex-col items-start gap-10 w-1/4 md:py-36">
                <h2 className=" md:text-5xl font-bold">Fashion Up<br /> Your Look</h2>
                <p className="hidden md:block text-sm md:text-xs text-justify">Explore our exclusive collection of stylish and trendy fashion items, curated to elevate your wardrobe with the latest styles. 
                    From chic dresses to elegant accessories, find everything you need to express your unique fashion sense.</p>
                <button className='hover:bg-primary bg-white text-primary font-semibold hover:text-white
                        rounded-md px-6 py-3 duration-200'>View Menu</button>
            </div>
        </div>
    )
}