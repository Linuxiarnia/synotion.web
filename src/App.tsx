import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Profile } from '@views/profile/profile';
import { Leaderboards } from '@views/leaderboards/leaderboards';
import { Settings } from '@views/settings/settings';
import { useProvider } from './providers/ThemeContext';
import { Login } from './views/login/Login';
import { Game } from '@views/game/Game';
import { Gallery } from '@views/gallery/gallery';
import { Upload } from '@views/upload/upload';

const App: React.FC = () => {
    // const location = useLocation();
    const { theme } = useProvider();
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={theme || defaultTheme}>
            <CssBaseline />
<<<<<<< HEAD
            {/* <AppContent /> */}
            <Layout>
                <RouterProvider router={router}></RouterProvider>
            </Layout>
=======
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<Profile />} path='/' />
                        <Route element={<Leaderboards />} path='/leaderboards' />
                        <Route element={<Profile />} path='/profile' />
                        <Route element={<Settings />} path='/settings' />
                        <Route element={<Gallery />} path='/gallery' />
                        <Route element={<Game />} path='/game' />
                        <Route element={<Login />} path='/login' />
                        <Route element={<Upload />} path='/upload' />
                    </Routes>
                </Layout>
            </BrowserRouter>
>>>>>>> 9bdb4803bff20b5f53723bee6975ad3ea1d45eb9
        </ThemeProvider>
    );
};

export default App;
