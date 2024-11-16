import React, { useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Profile } from '@views/profile/profile';
import { Leaderboards } from '@views/leaderboards/leaderboards';
import { Settings } from '@views/settings/settings';
import { useProvider } from './context/ThemeContext';
import { Login } from './login/Login';
import { Game } from '@views/game/Game';


const router = createBrowserRouter([
    {
        path: '/',
        element: null
    },
    {
        path: '/leaderboards',
        element: <Leaderboards/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/settings',
        element: <Settings/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/game',
        element: <Game />
    }
]);

const App: React.FC = () => {
    // const location = useLocation();
    const { theme, toggleTheme } = useProvider();
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={theme || defaultTheme}>
            <CssBaseline />
            <Layout>
                <RouterProvider router={router}></RouterProvider>
                {/* <Button onClick={() => toggleTheme}>
                    ToggleTheme
                </Button> */}
            </Layout>
        </ThemeProvider>
    );
};

export default App;
