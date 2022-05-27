import React,{ useState } from 'react';


const SelectDropdown = ({itemQuantity, updateItemQuantity, itemId}) => {

    // store and update item's quantity
    const [quantity, setQuantity] = useState(itemQuantity);

    return(
        <select value={quantity} 
        onInput={e => { return (setQuantity(e.target.value),
                  updateItemQuantity(itemId, e.target.value)
                  )}
                }
                className="text-white bg-blue-600 px-1
                rounded ml-2 outline-none"
                >

          {[...Array(10)].map((value, index) => (
              <option key={index + 1} 
              value={index + 1}>
                  {index + 1}
              </option>
          ))}

        </select>
    )
}
export default SelectDropdown;