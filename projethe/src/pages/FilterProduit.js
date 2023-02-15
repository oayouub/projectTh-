import React from 'react';
import Footer from "../components/Footer";

import Filter from '../components/Filter';
import Navigation from '../components/Navigation';

const FilterProduit = () => {
    return (
        <div className='filtrePage'>
            <Navigation />
            <Filter />
            <Footer />
           
        </div>
    );
};

export default FilterProduit;