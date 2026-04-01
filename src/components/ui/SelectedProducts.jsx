import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedProducts = ({ premium, handleDeleteSelectedPremium }) => {
    return (
        <div>
            <div 
    
            className='flex items-center gap-6 justify-between p-8 shadow-sm rounded-xl bg-gray-50'>
                <div className='flex gap-4 items-center'>

                    <p className="text-5xl">
                        {premium.icon}
                    </p>

                    <div>
                        <h4 className='font-semibold'>{premium.title}</h4>
                        <p className='font-semibold'>{premium.price}</p>
                    </div>

                </div>


                <button className='text-red-500' onClick={() => handleDeleteSelectedPremium(premium)}>
                    <MdDelete />
                </button>

                
            </div>

            

        </div>
    );
};

export default SelectedProducts;