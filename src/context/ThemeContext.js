import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [ dark, setDark ] = useState([
        { isDarkMode: true },
    ])

    const onChangeTheme = () => {
        setDark({ isDarkMode: !dark.isDarkMode });
      }

    return (
        <ThemeContext.Provider value={{dark, onChangeTheme: onChangeTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;