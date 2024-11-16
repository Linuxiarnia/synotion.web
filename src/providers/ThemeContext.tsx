import { Theme } from '@mui/material';
import { buildTheme } from '@theme/theme';
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, toggleTheme as toggleSystemTheme } from 'src/store/store';

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
    const themeMode = useSelector((state: RootState) => state.mode);
    const dispatch = useDispatch();
    const [jwtoken, setJwtoken] = useState<string | null>(null);
    const theme = buildTheme(themeMode === 'dark');

    const toggleTheme = () => {
        dispatch(toggleSystemTheme(themeMode === 'light' ? 'dark' : 'light'));
    };

    const overWriteToken = (input: string) => {
        setJwtoken(input);
    };

    return (
        <ThemeContext.Provider value={{
            mode: themeMode === 'dark', theme, toggleTheme, jwtoken, overWriteToken
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useProvider = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useProvider };