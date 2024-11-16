import { createTheme, Theme } from '@mui/material';
import { generatePalette } from './palette';
import { componentOverrides } from '@theme/component-overrides';
import { ThemeModes } from '@models/ThemeEnums';
import { typography } from '@theme/typography';
import { useEffect, useState } from 'react';

declare module '@mui/material' {
    interface ThemeOptions {border: { borderRadius: number }}
    interface Theme {border: { borderRadius: number }}
}


export const buildTheme = (isDarkMode: boolean) => {
    const [theme, setTheme] = useState<Theme>();
    const palette = generatePalette(isDarkMode ? ThemeModes.DARK : ThemeModes.LIGHT);

    const refreshTheme = () => {
        const _theme = createTheme({
            border: { borderRadius: 5 }, 
            components: componentOverrides(palette),
            typography: typography(palette),
            palette
        });
        setTheme(_theme);
    };

    useEffect(() => {
        refreshTheme();
    }, [isDarkMode]);

    return theme;
};