import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
<<<<<<< HEAD
import { ThemeProvider } from './context/ThemeContext.tsx';
=======
import { ThemeProvider } from './providers/ThemeContext.tsx';
import './i18n.ts';
import { store } from 'src/store/store.ts';
import { Provider } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
>>>>>>> 9bdb4803bff20b5f53723bee6975ad3ea1d45eb9


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App></App>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
