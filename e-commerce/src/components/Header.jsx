import React from "react";

export default function Header() {
    return (
        <div className="md:mt-24 mt-20 text-white container bg-[url('./assets/images/17496.jpg')] min-h-[400px] lg:bg-cover bg-contain md:min-h-[650px] bg-no-repeat">
            <div className="flex flex-col items-start gap-6 lg:w-1/3 w-1/2 md:py-32 lg:py-40 py-16">
                <h2 className="md:text-5xl font-bold">Fashion Up<br /> Your Look</h2>
                <p className="hidden md:block text-sm md:text-xs text-justify">Explore our exclusive collection of stylish and trendy fashion items, curated to elevate your wardrobe with the latest styles. 
                    From chic dresses to elegant accessories, find everything you need to express your unique fashion sense.</p>
                <button className='hover:bg-primary xl:mt-3 bg-white text-primary font-semibold hover:text-white
                        rounded-md px-4 py-2 md:px-6 md:py-3 duration-200'>More</button>
            </div>
        </div>
    )
}