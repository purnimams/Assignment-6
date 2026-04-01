import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-12">
           <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8">

                {/* Logo */}

                <div>
                    <h1 className="text-2xl font-bold text-white mb-3">
                        DigiTools
                    </h1>
                    <p className="text-sm leading-7">
                        Premium digital tools for creators,
                        <br />
                         professionals, and businesses. Work smarter 
                         <br />
                         with our suite of powerful tools.
                    </p>
                    
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-3">Social Links</h3>
                    <ul className="space-y-2 text-sm flex gap-3">
                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaInstagram className="text-black" /></li>
                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaFacebook className="text-black" /></li>
                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaYoutube className="text-black" /></li>

                    </ul>
                </div>

            </div>



            {/* Bottom */}
            <div className="max-w-6xl mx-auto px-6">
                <hr className="mt-15 text-gray-500" />
                <div className="flex justify-between mt-10">
                    <p className="text-sm text-gray-500">
                        © 2026 DigiTools. All rights reserved.
                    </p>
                    <ul className="flex justify-around gap-5 text-sm text-gray-500">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>






        </div>
    );
};

export default Footer;