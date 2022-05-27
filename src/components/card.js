import React from 'react';
import {Link} from 'react-router-dom';
import Categorize from './categorize';
import Rating from './rating';


// this component renders a product
const Card = ({product}) => {

    return (
        <div className="mb-5 shadow-md p-1 rounded-lg
        shadow-gray-300 dark:bg-slate-800">
            <div className="h-40 w-56 ">
                <img src={product.image} 
                alt={product.name} className="max-w h-full rounded-lg"/>
            </div>
            <h3>{product.name}</h3>
            <Categorize categoryId={product.categoryId} />
            <h6>${product.price}</h6>
            <Rating rate={product.rating} />
            
            <Link to={product.id.toString()}>
                <button className="px-6 py-1  bg-indigo-900 
               hover:bg-indigo-600 active:bg-indigo-600 text-white
                 rounded-lg">
                    Buy
                </button>
            </Link>
            
        </div>
    )


}
export default Card;