import React from 'react';
import Categories from './categories';
import Card from './card';
import Spinner from './spinner';
import DataLoading from './dataloading';


// this components renders a list of products
// based on selected category
const ProductsList = ({setQuery, data, isError, isLoading,
                     filterOptions, setFilterOptions,
                     setSortValue}) => {  
                         
    return(
        <section className="md:flex md:flex-row md:gap-5" >
            <Categories setQuery={setQuery} filterOptions={filterOptions}
              setFilterOptions={setFilterOptions} 
              setSortValue={setSortValue} />
            <div className="md:flex-3/4 justify-between flex 
            relative "> 
                              
            {isLoading && <Spinner />}
            {(isLoading && !data) && <DataLoading />}
            
            { (!isLoading && !data) && <p className="items-center" >
              Failed to load products </p>}
            
            <div className="flex flex-wrap gap-2 md:gap-4">

              {data && data.map(item => (
                  <Card key={item.id.toString()} product={item}/>
              ))}
            
            </div>
            </div>
        </section>
    )
}
export default ProductsList;