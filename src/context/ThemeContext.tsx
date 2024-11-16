import { Theme } from '@mui/material';
import { buildTheme } from '@theme/theme';
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface ThemeContextProps {
    mode: boolean,
    theme?: Theme,
    toggleTheme: () => void,
    jwtoken: string | null,
    overWriteToken: (input: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({
    mode: true, toggleTheme(){}, jwtoken: null, overWriteToken(){} 
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    //use store to change the true to stored value asap
    const [mode, setTheme] = useState<boolean>(true);
    const [jwtoken, setJwtoken] = useState<string | null>(null);
    const theme = buildTheme(mode);

    const toggleTheme = () => {
        setTheme((prevTheme) => (!prevTheme));
    };

    const overWriteToken = (input: string) => {
        setJwtoken(input);
    };

    return (
        <ThemeContext.Provider value={{
            mode, theme, toggleTheme, jwtoken, overWriteToken
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useProvider = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useProvider };