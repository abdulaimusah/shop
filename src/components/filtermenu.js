import React, { useState } from 'react';


const FilterMenu = ({setFilterOptions}) => {

    const [avgRating, setAvgRating] = useState("");
    const [fromPrice, setFromPrice] = useState("");
    const [toPrice, setToPrice] = useState("");
    const [color, setColor] = useState("");
    const [sortValue, setSortValue] = useState("");
    

    const applyFilter = () => {

     const filters = [ (avgRating&& "rating="+ avgRating.toString()), 
     (fromPrice && "price_gte="+fromPrice.trim()),
     (toPrice && "price_lte="+toPrice.trim()),
     (color && "color="+color), 
     (sortOrder && sortValue)];
     const allFilters = filters.filter(item => item).map(
        (item, index, list) => {
            if (list.indexOf(item) === 0) {
                return  item;
            }
            return "&" + item;
        }
     ).join("");
    
        setFilterOptions(allFilters);
    }
    

    const clearFilter = () => {
        setFilterOptions("");
        setSortOrder("");
        setAvgRating("");
        setColor("");
        setFromPrice("");
        setToPrice("");
        setSortValue("");
    }

    const [sortOrder, setSortOrder] = useState("");
    const handleSorting = e => {
        setSortOrder(e.target.value);
        setSortValue("_sort=price&_order=" + e.target.value);
    }

   

    return(
        <div id="filter" className="hidden z-10 fixed top-22
        md:static md:block md:z-0 md:top-26 dropdown bg-white
        dark:bg-slate-700 "  >
            <h3>Filters</h3>
            <div className="sortclass" >       
                Sort by
                <div>
                    <div className="pl-1" >
                    <input type="radio" value="asc" id="lowest"
                    onChange={handleSorting} name="sort" />
                    <label htmlFor="lowest" >Lowest price</label>
                    </div>
                    <div className="pl-1" >
                    <input type="radio" value="desc" id="highest"
                    onChange={handleSorting} name="sort"  />
                    <label htmlFor="highest" >Highest price</label>
                    </div>
                </div>
            </div>
            <div>
                Price range
                
                <div className="pl-2 " >
                    From: $ <input type="tel" value={fromPrice}
                    className="border border-cyan-700 rounded mb-1
                    w-16 dark:text-black " 
                    onChange={ e => {
                        const filFrom = e.target.value;
                        setFromPrice( filFrom);
                    }} />
                </div>
                <div className="pl-2" >
                    To: $ <input type="tel" value={toPrice} 
                    className="border border-cyan-700 rounded mb-2
                    w-16 dark:text-black"
                    onChange={ e => {
                        const filTo = e.target.value;
                        setToPrice( filTo);
                    }} />
                </div>
            </div>
            <div>
                <label>Average Rating</label>
                <select onClick={ e => {
                    const filRating = e.target.value;
                    setAvgRating( filRating);
                }}
                className="text-white bg-blue-600 px-1
                rounded ml-2 outline-none mb-2" >
                    <option value="" >All</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                <labe>Color</labe>
                <select onClick={ e => {
                    const filColor = e.target.value;
                    setColor(filColor)
                }} 
                className="text-white bg-blue-600 px-1
                rounded ml-2 outline-none mb-2" >
                    <option value="" defaultSelected
                    selected >All</option>
                    <option value="white" >White</option>
                    <option value="black" >Black</option>
                    <option value="yellow" >Yellow</option>
                    <option value="blue" >Blue</option>
                    <option value="green" >Green</option>
                </select>
            </div>
            <div className="flex flex-wrap" >
                <button className="inline-block bg-indigo-600
                py-1 px-2 rounded active:bg-indigo-500 text-white"
                 onClick={applyFilter}>
                    Apply Filter
                </button>
                <button className="inline-block bg-indigo-600 ml-1
                py-1 px-2 rounded active:bg-indigo-500 text-white"
                 onClick={clearFilter}>
                    Clear Filter
                </button>
            </div>
        </div>
    )


}
export default FilterMenu;