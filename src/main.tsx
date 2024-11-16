import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './providers/ThemeContext.tsx';
import './i18n.ts';
import { store } from 'src/store/store.ts';
import { Provider } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>
//     },
//     {
//         path: '/leaderboards',
//         element: <App/>
//     }
// ]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App></App>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
