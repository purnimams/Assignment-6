// import React, { useState } from 'react';
import React from 'react';


const Products = ({ premium, isSelected, onSelect, selectedPremiums, setSelectedPremiums, setBadge  }) => {



    const handleBuyNow = () => {


        
        setSelectedPremiums([...selectedPremiums, premium])
        
    };


    const handleClick = () => {
    handleBuyNow();
    onSelect(); 
    setBadge(prev => prev + 1)};




    return (
        <div

            className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition"
        >

            {/* Top */}
            <div className="flex justify-between items-start mb-4">

                <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
                    {premium.icon}
                </div>

                {premium.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                        {premium.badge}
                    </span>
                )}
            </div>


            {/* Title */}
            <h3 className="text-xl font-semibold text-black">
                {premium.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-500 mt-2">
                {premium.desc}
            </p>



            {/* Price */}

            <p className="text-gray-500 my-4">
                <span className="text-3xl font-bold text-black">
                    {premium.price}
                </span>
                /Mo
            </p>




            {/* Features */}
            <ul className="mt-4 space-y-2 text-sm text-gray-500">

                {premium.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="!text-green-500 font-bold">✓</span> {f}
                    </li>
                ))}

            </ul>



            {/* Button */}
            <button
                onClick={handleClick}

                className={`mt-6 w-full py-2 rounded-full text-white font-medium
                    ${isSelected
                        ? "bg-green-600"
                        : "bg-linear-to-r from-blue-700 to-purple-600"


                    }`}
                >

                {isSelected ? "✓Added to Cart!" : " Buy Now"}
            </button>


        </div>
    );
};

export default Products;