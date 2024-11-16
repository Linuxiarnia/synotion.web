import React, { useState } from 'react';
import { AppContent } from './AppContent';
import { Button, CssBaseline, ThemeProvider, 
    useMediaQuery } from '@mui/material';
import { buildTheme } from '@theme/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Profile } from '@views/profile/profile';
import { Leaderboards } from '@views/leaderboards/leaderboards';
import { Settings } from '@views/settings/settings';


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
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<boolean>(isDarkMode);
    const theme = buildTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContent />
            <Layout>
                <RouterProvider router={router}></RouterProvider>
                <Button onClick={() => setMode(prev => !prev)}>
                    ToggleTheme
                </Button>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
