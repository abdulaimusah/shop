import { useCart } from "react-use-cart";
import React from 'react';
import SelectDropdown from "./selectdropdown";

// this is the cart, shows added products
// I used "react-use-cart" to store and retrieve
// product data.
const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem
    } = useCart()

    const totalPrice = !isEmpty && items.reduce(
        (previousValue, currentValue) => (
            previousValue + 
            (currentValue.price * currentValue.quantity)

        ), 0
    );


    return (
        <section className="">
            <h1 className="mb-5">Your Cart </h1>

            {totalUniqueItems ? 
            (<h2 className="mb-5"> {totalUniqueItems}{" "} 
            item{totalUniqueItems > 1 && "s"} added</h2>) :
            (<h3>Your cart is empty</h3>) }
             <div className=" max-w-screen">
                {!isEmpty && items.map(item => (                 
                    <div key={item.id} className="md:w-1/2 mb-5 shadow-md
                    shadow-gray-400 rounded-xl dark:bg-slate-900
                    bg-white border border-slate-200" >
                        <div className="flex  justify-around mb-3
                        md:mb-5  pb-2" >
                        <h4>{item.name} 
                        </h4>
                        <h4>${item.price}</h4>
                        </div>
                        
                        <div className="flex justify-around mb-3 
                        md:mb-5 pb-2" >
                        <div>Quantity: 
                        <SelectDropdown itemQuantity={item.quantity}
                         updateItemQuantity={updateItemQuantity} 
                         itemId={item.id} />
                         </div>
                        <div>
                        <button onClick={ () => (
                         removeItem(item.id))}
                         className="p-1  bg-red-700 
                         hover:bg-red-500 active:bg-red-500 text-white
                         rounded-lg " >
                            remove item
                        </button>
                        </div>
                        </div>
                    </div>   
                       
                    
                ))}
                </div>
                <div className="p-10" >
                    <h3>Total Amount</h3>
                    <p>${totalPrice}</p>
                </div>
            <div  className="p-10">
                 <button className="px-3 py-2 bg-blue-800 
            hover:bg-blue-500 active:bg-blue-500 text-white
             rounded-lg block peer" >
                     Proceed to Checkout
                 </button>
                 <p className="invisible peer-hover:visible">
                     Secured payment processing
                 </p>
             </div>

        </section>
    );
}

export default Cart;