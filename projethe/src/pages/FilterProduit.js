import React from 'react';
import Filter from '../components/Filter';
import Navigation from '../components/Navigation';

const FilterProduit = () => {
    return (
        <div className='filtrePage'>
            <Navigation />
            <Filter />
        </div>
    );
};

export default FilterProduit;