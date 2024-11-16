import { Theme } from '@mui/material';
import { buildTheme } from '@theme/theme';
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, toggleTheme as toggleSystemTheme, changeToken as changeUserToken } from 'src/store/store';

interface ThemeContextProps {
    mode: boolean,
    theme?: Theme,
    toggleTheme: () => void,
    jwtoken: string | null,
    overWriteToken: (input: string) => void,
    login: string | null
}

const ThemeContext = createContext<ThemeContextProps>({
    mode: true, toggleTheme(){}, jwtoken: null, overWriteToken(){}, login: null
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    //use store to change the true to stored value asap
    const themeMode = useSelector((state: RootState) => state.settings.mode);
    const userLogin = useSelector((state: RootState) => state.login.login);
    const userToken = useSelector((state: RootState) => state.login.jwtoken);

    const dispatch = useDispatch();
    //const [jwtoken, setJwtoken] = useState<string | null>(null);
    const theme = buildTheme(themeMode === 'dark');

    const toggleTheme = () => {
        dispatch(toggleSystemTheme(themeMode === 'light' ? 'dark' : 'light'));
    };

    const overWriteToken = (input: string) => {
        
        dispatch(changeUserToken(input));
    };

    return (
        <ThemeContext.Provider value={{
            mode: themeMode === 'dark', theme, toggleTheme, jwtoken: userToken, overWriteToken, login: userLogin
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useProvider = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useProvider };