import React from 'react';

const SearchBox = ({searchChange}) =>{
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green hover-bg-lightest-blue'
                type='search'
                placeholder='Cari Robot'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;