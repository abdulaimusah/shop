import React from 'react';
import Categories from './categories';
import Card from './card';
import Spinner from './spinner';


// this components renders a list of products
// based on selected category
const ProductsList = ({setQuery, data, isError, isLoading}) => {  

    return(
        <section className="md:flex md:flex-row md:gap-5" >
            <Categories setQuery={setQuery } />
            <div className="md:flex-3/4 justify-between
            "> 
                              
            {isLoading && <Spinner />}
            {!data && <p>Failed to load products </p>}
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {data && data.map(item => (
                  <Card key={item.id.toString()} product={item}/>
              ))}
            
            </div>
        </section>
    )
}
export default ProductsList;