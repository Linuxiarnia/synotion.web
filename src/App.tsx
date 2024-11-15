import React, { useState } from 'react';
import { AppContent } from './AppContent';
import { Button, CssBaseline, ThemeProvider, 
    useMediaQuery } from '@mui/material';
import { buildTheme } from '@theme/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';


const router = createBrowserRouter([
    {
        path: '/',
        element: null
    },
    {
        path: '/leaderboards',
        element: null
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
