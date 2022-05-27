import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';



// theme toggler
const ThemeSwitcher = ({theme, setTheme}) => {

    // set checked attribute of DarkModeSwitch to false, if theme
    // is light, otherwise true.
    const [isDarkMode, setDarkMode] = useState(theme==="light" ? false : true);
    
    //change theme when toggle is clicked
    const handleClick = checked => {
        setDarkMode(checked);
        const newTheme = checked ? "dark" : "light";
        setTheme(newTheme);
    }

    return(
        
          <div className="my-auto">
              <DarkModeSwitch
              checked={isDarkMode}
              onChange={handleClick}
              sunColor="white"
              />
          </div>
        
    )
}
export default ThemeSwitcher;