import React from 'react';
import ThemeSwitcher from "./themeswitcher";
import {Link} from 'react-router-dom';
import CartSymbol from './cartsymbol';

// header section of page
// it includes the dark/light mode toggle
const Header = ({theme, setTheme}) => {

    
    


    return (
        <header className="h-12 md:h-14 border-b border-blue-100
        shadow shadow-blue-100 flex justify-around bg-gray-800
        flex-shrink-0 px-2 md:px-5 dark:bg-slate-900 
      text-white dark:shadow-none sticky top-0 ">

            <button>
                <Link to="/">Shop</Link>
            </button>

            <ThemeSwitcher theme={theme} setTheme={setTheme} />

            <Link to="/cart">
              <CartSymbol />
            </Link>

        </header>
    )
}
export default Header;