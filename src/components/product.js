import { useCart } from 'react-use-cart';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Categorize from './categorize';
import Rating from './rating';


// this component displays a selected product.
const Product = ({data}) => {

    const {addItem} = useCart();

    const { pid } = useParams();

    const selectedProduct = 
    data && data.find(item => pid === item.id.toString())


    return (
        <section className="prose prose-slate dark:prose-invert 
        md:ml-10 shadow-xl px-5 py-2 lg:w-1/2 md:w-3/4 rounded-lg">
            <h1 className="mb-3">{selectedProduct.name}</h1>
            <div className="h-56 w-64">
                <img className=" max-w-full max-h-full
                rounded-lg" 
                src={selectedProduct.image} 
                alt={selectedProduct.name} />
            </div>

            <div>Price: {" $"} 
            {selectedProduct.price.toString().trim()} </div>

            <div>Color: {" "}{selectedProduct.color}</div>
            <div>Rating: <Rating rate={selectedProduct.rating} /></div>
            <div className="mb-3" >
            <Categorize categoryId={selectedProduct.categoryId} />
            </div>

            <Link to="/cart">
            <button onClick={() => addItem(selectedProduct)}
            className="px-2 py-1 bg-blue-800 
            hover:bg-blue-500 active:bg-blue-500 text-white
             rounded inline-flex items-center text-lg font-medium">  
                <button type="button" className="text-white  focus:outline-none rounded-lg mr-2 text-center inline-flex items-center ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
                    Add to Cart
                
            </button>
            </Link>
            
        </section>
    )
}
export default Product;