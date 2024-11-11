import { createTheme, SxProps } from '@mui/material';
import { generatePalette } from './palette';
import { componentOverrides } from '@theme/component-overrides';
import { ThemeModes } from '@models/ThemeEnums';
import { typography } from '@theme/typography';

declare module '@mui/material' {
    interface ThemeOptions {border: SxProps}
}


export const buildTheme = (isDarkMode: boolean) => {
    const palette = generatePalette(isDarkMode ? ThemeModes.DARK : ThemeModes.LIGHT);

    const _theme = createTheme({
        border: { borderRadius: 5 }, 
        components: componentOverrides(palette),
        typography: typography(palette),
        palette
    });

    return _theme;
};