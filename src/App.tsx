import React, { useState } from 'react';
import { AppContent } from './AppContent';
import { Button, CssBaseline, ThemeProvider, 
    useMediaQuery } from '@mui/material';
import { buildTheme } from '@theme/theme';

const App: React.FC = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<boolean>(isDarkMode);
    const theme = buildTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button onClick={() => setMode(prev => !prev)}>
                ToggleTheme
            </Button>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;
