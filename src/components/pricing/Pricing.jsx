import React from "react";

const Pricing = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-left">

                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    Simple, Transparent Pricing
                </h2>
                <p className="mb-10 text-center text-sm text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Starter */}
                    <div className="p-6 rounded-xl bg-gray-100">
                        <h3 className="text-xl font-semibold text-black">Starter</h3>
                        <p className="text-sm text-gray-500">Perfect for getting started</p>
                        <p className="text-gray-500 my-4"><span className="text-3xl font-bold text-black">$0</span>/Month</p>
                        <ul className="text-sm text-gray-500 space-y-2 mb-6">
                            
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>
                                Access to 10 free tools
                            </li>

                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Basic templates</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Community support</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>1 project per month</li>
                        </ul>
                        <button className="w-full bg-linear-to-r from-blue-700 to-purple-600 py-3 text-white font-semibold rounded-full">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro */}
                    <div className="p-6 rounded-xl bg-linear-to-r from-blue-700 to-purple-600 text-white scale-105 relative">

                        
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-yellow-100 text-red-400 text-xs rounded-full px-2 py-0.5">
                            Most Popular
                        </div>


                        <h3 className="text-xl font-semibold">Pro</h3>
                        <p className="text-sm">Best for professionals</p>

                        <p className="text-3xl font-bold my-4">$29/month</p>
                        <ul className="text-sm space-y-2 mb-6">
                            <li><span className="mr-1 font-bold">✓</span>Access to all premium tools</li>
                            <li><span className="mr-1 font-bold">✓</span>Unlimited templates</li>
                            <li><span className="mr-1 font-bold">✓</span>Priority support</li>
                            <li><span className="mr-1 font-bold">✓</span>Unlimited projects</li>
                            <li><span className="mr-1 font-bold">✓</span>Cloud sync</li>
                            <li><span className="mr-1 font-bold">✓</span>Advanced analytics</li>
                        </ul>
                        <button className="w-full bg-white text-blue-700 font-semibold py-3 rounded-full">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="p-6 rounded-xl bg-gray-100">
                        <h3 className="text-xl font-semibold text-black">Enterprise</h3>
                        <p className="text-sm text-gray-500">For teams and businesses</p>
                        <p className="text-gray-500 my-4"><span className="text-3xl font-bold text-black">$99</span>/Month</p>
                        <ul className="text-sm text-gray-500 space-y-2 mb-6">
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Everything in Pro</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Team collaboration</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Custom integrations</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Dedicated support</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>SLA guarantee</li>
                            <li><span className="text-green-500 mr-1 font-bold">✓</span>Custom branding</li>
                        </ul>
                        <button className="w-full bg-linear-to-r from-blue-700 to-purple-600 py-3 text-white font-semibold rounded-full">
                            Contact Sales
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pricing;