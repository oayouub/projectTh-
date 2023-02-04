import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <ul>
                <h3>COULEUR DE THÉ</h3>
                <li><input type="checkbox" id='filter1' name='Couleur'/>
                <label htmlFor="filter1" >caca</label></li>
                <li><input type="checkbox" id='filter2' name='Couleur'/>
                <label htmlFor="filter2">caca</label></li>
                <li><input type="checkbox" id='filter3' name='Couleur'/>
                <label htmlFor="filter3">caca</label></li>
                <li><input type="checkbox" id='filter4' name='Couleur'/>
                <label htmlFor="filter4">caca</label></li>
                <li><input type="checkbox" id='filter5'name='Couleur' />
                <label htmlFor="filter5">caca</label></li>
            </ul>
            <ul>
                <h3>PARFUMS</h3>
                <li><input type="checkbox" id='filter6' name='parfums'/>
                <label htmlFor="filter6" >caca</label></li>
                <li><input type="checkbox" id='filter7' name='parfums'/>
                <label htmlFor="filter7">caca</label></li>
                <li><input type="checkbox" id='filter8' name='parfums'/>
                <label htmlFor="filter8">caca</label></li>
                <li><input type="checkbox" id='filter9' name='parfums'/>
                <label htmlFor="filter9">caca</label></li>
                <li><input type="checkbox" id='filter10'name='parfums' />
                <label htmlFor="filter10">caca</label></li>
            </ul>
            <ul>
                <h3>ORIGINE</h3>
                <li><input type="checkbox" id='filter11' name='origine'/>
                <label htmlFor="filter11" >caca</label></li>
                <li><input type="checkbox" id='filter12' name='origine'/>
                <label htmlFor="filter12">caca</label></li>
                <li><input type="checkbox" id='filter13' name='origine'/>
                <label htmlFor="filter13">caca</label></li>
                <li><input type="checkbox" id='filter14' name='origine'/>
                <label htmlFor="filter14">caca</label></li>
                <li><input type="checkbox" id='filter15'name='origine' />
                <label htmlFor="filter15">caca</label></li>
            </ul>
            <ul>
                <h3>FORMAT</h3>
                <li><input type="checkbox" id='filter16' name='format'/>
                <label htmlFor="filter16" >caca</label></li>
                <li><input type="checkbox" id='filter17' name='format'/>
                <label htmlFor="filter17">caca</label></li>
                <li><input type="checkbox" id='filter18' name='format'/>
                <label htmlFor="filter18">caca</label></li>
                <li><input type="checkbox" id='filter19' name='format'/>
                <label htmlFor="filter19">caca</label></li>
                <li><input type="checkbox" id='filter20'name='format' />
                <label htmlFor="filter20">caca</label></li>
            </ul>
            <div className='rightFilter'>
                <ul>
                    <li>
               <h3>PRIX</h3>
                <input type="range" id='filtreRange' /></li>
                <li><h3>ORDRE</h3></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Filter;