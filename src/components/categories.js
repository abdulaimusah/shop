import React, { useState } from "react";
import useFetchData from "./usefetchdata";
import Spinner from "./spinner";
import FilterMenu from './filtermenu';

//this is shows the category of products available.

const Categories = ({ setQuery, setFilterOptions}) => {

    // products' categories url
     const categoryapi = "https://expressmiddle.herokuapp.com/users/api.devtoolstech.in/ecommerce/categories";
     const {data, isError, isLoading} = useFetchData(categoryapi);
    

    const handleClick = e => {
        const categoryId = e.target.value;
        categoryId ? setQuery("?categoryId=" + categoryId.toString()) :
        setQuery("");
        document.getElementById("myDropdown")
                .classList.toggle("hidden");
    }

    return (
        <aside className=" md:flex-1/4 flex-shrink-0
        sticky top-12 md:static" >
            <div className="md:sticky md:top-16 top-15" >
            {isError && <p>Couldn't load categories</p>}
            {/*isLoading && <Spinner />*/}

            <button onClick={() => {
                document.getElementById("myDropdown")
                .classList.toggle("hidden");
              }} 
              id="dropdownToggle"
              className="text-white
              bg-blue-800 hover:bg-blue-600 z-100 focus:outline-none
               font-medium rounded-md text-sm px-4 py-2 
              text-center inline-flex items-center dark:bg-blue-600 
              dark:hover:bg-blue-700 dropdownButton" 
              type="button">Select Category <svg className="w-4 h-4 ml-2" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
              </path></svg>
            </button>

            <button className="ml-1 text-white z-100 items-center
              bg-indigo-800 py-2 px-2 md:hidden inline-flex
              rounded-md text-sm font-medium focus:outline-none
              hover:bg-indigo-700 active:bg-indigo-700 
              dropdownButton" 
              id="filterButton"
              onClick={()=> (document.getElementById("filter")
              .classList.toggle("hidden"))}>
                Filter
              <svg className="w-4 h-4 ml-2" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
              </path></svg>
            </button> 
            
            <div id="myDropdown" className="z-100 md:z-0 hidden 
            bg-white divide-y divide-gray-100 rounded shadow  dropdown
             dark:bg-gray-700 absolute w-40 md:w-full" >
            { (!isError && !isLoading) && (<ul  className="py-1 text-sm w-full
            text-gray-700 dark:text-gray-200" >
            <li><button onClick={handleClick}
            value="" className="px-2 py-1 text-left
            hover:bg-blue-500 hover:text-white 
            dark:text-white rounded w-full ">
                All products</button></li>
            

            {data && data.map(item => (
                <li><button key={item.id} value={item.id}
                onClick={handleClick} 
                className="px-2 py-1 text-left
                hover:bg-blue-500 hover:text-white
                dark:text-white rounded w-full">
                    {item.name}
                </button>
                </li>
            ))}
            </ul>
            )}
            </div>
            <FilterMenu setFilterOptions={setFilterOptions} />
            </div>
            
        </aside>
    )
}

export default Categories;
