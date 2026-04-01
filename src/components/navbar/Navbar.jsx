import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ badge }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <div className="relative">
            <FiShoppingCart className="text-2xl text-gray-600" />

            {badge > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {badge}
            </span>
          )}
          </div>



          <button className="text-black">
            Login
          </button>
          <button className="bg-linear-to-r from-blue-700 to-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;