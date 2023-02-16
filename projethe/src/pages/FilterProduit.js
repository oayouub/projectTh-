import React from 'react';
import Footer from "../components/Footer";

import Filter from '../components/Filter';
import Navigation from '../components/Navigation';
import ReturnTop from '../components/ReturnTop';

const FilterProduit = () => {
    return (
        <div className='filtrePage'>
            <Navigation />
            <Filter />
            <Footer />
            <ReturnTop />
           
        </div>
    );
};

export default FilterProduit;