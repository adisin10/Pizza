import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import { productData } from './components/Products/data';
import { productDataTwo } from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    
   <Router>
     <GlobalStyle />
     <Hero/>
     <Products heading='Choose Your Favourite' data={productData} />
     <Products heading='Sweet Dishes For You' data={productDataTwo} />
     <Feature/>
     <Footer/>
    
   </Router>

    
  );
}

export default App;
