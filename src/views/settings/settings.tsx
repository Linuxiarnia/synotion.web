import React from 'react';
import { useTheme } from 'src/context/ThemeContext';


export const Settings = () => {

    const { mode, toggleTheme } = useTheme();

    return(
        <>
            <h2>Themed Component</h2>
            <p>Current Theme: {`${mode}`}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
};