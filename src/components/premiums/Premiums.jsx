import React, { use, useState } from 'react';
import ProductsPremiums from './ProductsPremiums/ProductsPremiums';
import CartPremiums from './CartPremiums/CartPremiums';

const Premiums = ({ premiumsPromise, setBadge, badge }) => {
    console.log(premiumsPromise);
    const premiums = use(premiumsPromise);
    console.log(premiums);


    const [selectedType, setSelectedType] = useState("products");
    console.log(selectedType, "selectedType");

    const [selectedPremiums, setSelectedPremiums] = useState([]);



    return (
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-left">

                <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
                    Premium Digital Tools
                </h2>
                <p className="mb-3 text-center text-sm text-gray-500">Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity
                    </p>

                    

                    <div className='text-center mb-10'>

                        <button 
                        onClick={() => setSelectedType("products")}
                        className={`${selectedType === "products" ? "bg-linear-to-r from-blue-700 to-purple-600 text-white" : "border border-gray-300 text-black"} px-5 py-2 rounded-full`}
                        >
                            Products
                        </button>

                       <button 
                        onClick={() => setSelectedType("cart")}
                        className={`${selectedType === "cart" ? "bg-linear-to-r from-blue-700 to-purple-600 text-white" : "border border-gray-300 text-black"} px-5 py-2 rounded-full`}
                        >
                            Cart({selectedPremiums.length})
                        </button>

                    </div>




                {selectedType === "products" ? (
                    <ProductsPremiums
                      premiums={premiums}
                      setBadge={setBadge}
                      badge={badge}
                      selectedPremiums={selectedPremiums}
                      setSelectedPremiums={setSelectedPremiums}

                    />

                ) : (
                    <CartPremiums 
                      selectedPremiums={selectedPremiums}
                      setSelectedPremiums={setSelectedPremiums}
                      setBadge={setBadge}
                    />
                )

                }

                


            </div>
        </div>
    );
};

export default Premiums;

                    

                   
                 
                