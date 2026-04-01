import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { GiPrimitiveNecklace } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import SelectedProducts from '../../ui/SelectedProducts';


const CartPremiums = ({ selectedPremiums, setSelectedPremiums, setBadge }) => {
    console.log(selectedPremiums, "selectedPremiums");

    const handleDeleteSelectedPremium = (premium) => {
        console.log(selectedPremiums, "selectedPremiums");

        const filteredPremiums = selectedPremiums.filter(selectedPremium => selectedPremium.title != premium.title)

        setSelectedPremiums(filteredPremiums);

        console.log(filteredPremiums, "filteredPremiums");

        setBadge(prev => prev - 1);
    }


    return (
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 rounded-xl shadow-sm p-8">

                <h3 className='font-semibold'>Your Cart</h3>


                <div className='space-y-5'>
                    {selectedPremiums.length === 0 ? (

                        <div>

                            <div className='mt-16 mb-6 flex items-center justify-center flex-col gap-4'>
                                <FiShoppingCart className="text-4xl text-gray-300" />
                                <p className='text-sm text-gray-300'>Your cart is empty</p>
                            </div>
                        </div>


                    ) : (
                        <>
                        {selectedPremiums.map((premium, ind) => (
                            

                                <SelectedProducts
                                    key={ind}
                                    premium={premium}
                                    handleDeleteSelectedPremium={handleDeleteSelectedPremium}
                                />


                            ))}


                <div className='flex items-center justify-between mt-6'>
                    <p className='text-gray-400'>Total</p>
                    <p className='text-3xl font-bold'>$97</p>
                </div>

                <button className="w-full bg-linear-to-r from-blue-700 to-purple-600 py-3 text-white font-semibold rounded-full mt-4">
                            Proceed to Checkout
                </button>
                    

                    
            
                    </>

                )}
            </div>






           </div>
        </div>
    );
};

export default CartPremiums;