import React from 'react';
import { AppContent } from './AppContent';
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Profile } from '@views/profile/profile';
import { Leaderboards } from '@views/leaderboards/leaderboards';
import { Settings } from '@views/settings/settings';
import { useTheme } from './context/ThemeContext';


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
    }
]);

const App: React.FC = () => {
    // const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={theme || defaultTheme}>
            <CssBaseline />
            <AppContent />
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
