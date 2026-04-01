import React, { useState } from 'react';
import Products from '../../ui/Products';

const ProductsPremiums = ({ premiums, selectedPremiums, setSelectedPremiums, setBadge, badge }) => {
    console.log(premiums, "premiums");


        const [selectedIndex, setSelectedIndex] = useState(null);




    return (

        <div>
        <div className="grid md:grid-cols-3 gap-8">
            {premiums.map((premium, index) => {
                return (
                    <Products
                    key={index}
                    premium={premium}
                    setBadge={setBadge}
                    badge={badge}
                    isSelected={selectedIndex === index}
                    onSelect={() => setSelectedIndex(index)}
                    selectedPremiums={selectedPremiums}
                    setSelectedPremiums={setSelectedPremiums}
                     />
                );
            })}
        </div>
        
        </div>



    );
};

export default ProductsPremiums;