import React from 'react';
import { FeatureContainer , FeatureButton } from './FeatureElements';

const Feature = () => {
    return(
        <FeatureContainer>
            <h1>Pizza Of The day</h1>
            <p>Truffle Alfredo Sauce with 24 Carat
             Gold Dust</p>
             <FeatureButton>Order Now</FeatureButton>
             </FeatureContainer>
    )
}
export default Feature;