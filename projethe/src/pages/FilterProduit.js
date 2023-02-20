
import Footer from "../components/Footer";

import Filter from '../components/Filter';
import Navigation from '../components/Navigation';
import ReturnTop from '../components/ReturnTop';

const FilterProduit = ({ checkedColor, setCheckedColor}) => {
    
    return (
        <div className='filtrePage'>
            <Navigation />
            <Filter checkedColor={checkedColor} setCheckedColor={setCheckedColor}/>
            <Footer />
            <ReturnTop />
           
        </div>
    );
};

export default FilterProduit;