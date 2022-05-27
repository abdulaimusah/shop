import React, {useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import Product from './product';
import Cart from './cart';
import useFetchData from './usefetchdata';
import ProductsList from './productslist';


// this is Routes component. 
// It renders either "ProductsList", "Product"
// or "Cart" component based on 
// the current path of the url

const Main = () => {

    const [query, setQuery] = 
    useState("http://api.devtoolstech.in/ecommerce/products");
    const {data, isError, isLoading} = useFetchData(query);

    return(
        <main className="border-b border-sky-200 bg-white
        shadow shadow-blue-100 dark:shadow-none 
        flex-grow px-2 md:px-5 pt-3 pb-5 dark:bg-slate-700
        dark:text-white mb-3 dark:mb-0" >
            <Routes>
              <Route index element={<ProductsList data={data} 
              isError={isError} isLoading={isLoading} 
              setQuery={setQuery} />} />
              <Route path="/:pid" element={<Product data={data} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}
export default Main;