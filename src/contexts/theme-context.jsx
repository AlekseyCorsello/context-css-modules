import { createContext, useState } from "react";
import { themes } from "./themes";

const ThemeContext = createContext(
    themes.light // по умолчанию
);

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === themes.dark ? themes.light : themes.dark)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}