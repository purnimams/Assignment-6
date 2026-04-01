import React from "react";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <p className="text-sm bg-purple-100 text-purple-600 inline-block px-3 py-1 rounded-full mb-4">
            New AI-Powered Tools Available
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mt-4">
            Access premium AI tools, design assets, templates and productivity software in one place.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-linear-to-r from-blue-700 to-purple-600 text-white px-6 py-3 rounded-full">
              Explore Products
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right (Blur image box) */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-300 blur-3xl opacity-30 rounded-xl"></div>
          <img
            src={banner}
            alt="banner"
            className="relative rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;