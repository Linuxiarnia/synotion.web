import { Theme } from '@mui/material';
import { buildTheme } from '@theme/theme';
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface ThemeContextProps {
    mode: boolean,
    theme?: Theme,
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({ mode: true, toggleTheme(){} });

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [mode, setTheme] = useState<boolean>(true);
    const theme = buildTheme(mode);

    const toggleTheme = () => {
        setTheme((prevTheme) => (!prevTheme));
    };

    return (
        <ThemeContext.Provider value={{
            mode, theme, toggleTheme 
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };