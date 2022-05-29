import React from "react";
import useFetchData from "./usefetchdata";
import Spinner from "./spinner";

//this is shows the category of products available.

const Categories = ({setQuery}) => {

    // categories api url
     const categoryapi = "https://expressmiddle.herokuapp.com/users/api.devtoolstech.in/ecommerce/categories";
     const {data, isError, isLoading} = useFetchData(categoryapi);
     


    const handleClick = e => {
        const categoryId = e.target.value;
        categoryId==="all" ? 
        setQuery("https://expressmiddle.herokuapp.com/users/api.devtoolstech.in/ecommerce/products") :
        setQuery("https://expressmiddle.herokuapp.com/users/api.devtoolstech.in/ecommerce/products?categoryId=" 
        + categoryId.toString());

        document.getElementById("myDropdown")
                .classList.toggle("hidden");

    }

    return (
        <aside className="relative md:flex-1/4 flex-shrink-0
        sticky top-12 md:position-none" >
            <div className="md:sticky md:top-16 top-15" >
            {isError && <p>Error loading categories</p>}
            {isLoading && <Spinner />}

            <button onClick={() => {
                document.getElementById("myDropdown")
                .classList.toggle("hidden");
              }} 
              id="dropdownToggle"
              className="text-white block
              bg-blue-800 hover:bg-blue-600  focus:outline-none
               font-medium rounded-lg text-sm px-4 py-2.5 
              text-center inline-flex items-center dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800 " 
              type="button">Select Category <svg className="w-4 h-4 ml-2" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
              </path></svg>
            </button>
            
            <div id="myDropdown" className="z-10 md:-z-1 hidden md:block
            bg-white divide-y divide-gray-100 rounded shadow
             dark:bg-gray-700 absolute w-40 md:w-full" >
            <ul  className="py-1 text-sm w-full
            text-gray-700 dark:text-gray-200" >
            { !isError && ( <li><button onClick={handleClick}
            value="all" className="px-2 py-1 text-left
            hover:bg-blue-500 hover:text-white 
            dark:text-white rounded w-full ">
                All products</button></li>
            )}

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
            </div>
            </div>
        </aside>
    )
}

export default Categories;
