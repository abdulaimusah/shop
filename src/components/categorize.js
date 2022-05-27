import React, {useState} from 'react';


const Categorize = ({categoryId}) => {
// decode and return category
// of products.
    
    if (categoryId===1) {
        return(<p>
            Category: Books
        </p>);
    }
    else if (categoryId===2)  {
        return(<p>
            Category: Home
        </p>);
    } 
    else if (categoryId===3) {
        return(<p>
            Category: kids
        </p>);
    }
    else if (categoryId===4) {
        return(<p>
            Category: Health
        </p>);
    }
    else if (categoryId===5) {
        return(<p>
            Category: Clothing
        </p>);
    }

    
}
export default Categorize;