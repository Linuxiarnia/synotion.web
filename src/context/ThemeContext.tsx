import { Theme } from '@mui/material';
import { buildTheme } from '@theme/theme';
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface ThemeContextProps {
    mode: 'light' | 'dark',
    theme: Theme,
    toggleTheme: () => void;
}

const ThemeContext = createContext(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [mode, setTheme] = useState<'light' | 'dark'>('light');
    const theme = buildTheme(mode === 'dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const ThemeContext = createContext<ThemeContextProps>({
        mode: 'light', theme, toggleTheme 
    });

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