import React from "react";
import user from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocket from "../assets/rocket.png";


const GetStarted = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Get Started In 3 Steps
                </h2>
                <p className="mb-10 text-sm text-gray-500">Start using premium digital tools in minutes, not hours.</p>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">

                        <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">
                            1
                        </div>


                        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 mt-16">
                            <img
                                src={user}
                                alt=""
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-lg text-black">Create Account</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Sign up for free in seconds. No credit card
                            <br />
                            required to get started.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">

                        <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">
                            2
                        </div>

                        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 mt-16">
                            <img
                                src={packageImg}
                                alt=""
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-lg text-black">Choose Products</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Browse our catalog and select the tools
                            <br />
                            that fit your needs.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">

                        <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">
                            3
                        </div>

                        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 mt-16">
                            <img
                                src={rocket}
                                alt=""
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-lg text-black">Start Creating</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Download and start using your premium
                            <br />
                            tools immediately.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetStarted;