import  {useState} from 'react';


// app theme
// default is "light".
// theme change is saved in localStorage.
const useTheme = () => {

    const getInitialTheme = () => {

        if (localStorage && localStorage.theme) {
            return localStorage.theme
        }
        return "light";
    }

    const [theme, setTheme] = useState(getInitialTheme);

    localStorage.setItem("theme", theme);

    return (
        [theme, setTheme]
    );
}

export default useTheme;