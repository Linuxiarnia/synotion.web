import React from 'react';
import { useTheme } from 'src/context/ThemeContext';


export const Settings = () => {

    const { theme, toggleTheme } = useTheme();

    return(
        <>
            <h2>Themed Component</h2>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
};