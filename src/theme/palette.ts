import createPalette from '@mui/material/styles/createPalette';
import { ThemeModes } from '@models/ThemeEnums';

export const generatePalette = (mode: ThemeModes) => createPalette({
    primary: {
        light: '#FCB69C',
        main: '#FA8255',
        dark: '#E75823'
    },
    secondary: {
        light: '#d4fcf5',
        main: '#21c1a3',
        dark: '#16836E'
    },
    text: {
        primary: mode !== ThemeModes.DARK ? '#1e1e1e' : '#fff',
        secondary: mode !== ThemeModes.DARK ? '#1e1e1e' : '#fff',
    },
    background: {
        default: mode === ThemeModes.DARK ? '#1e1e1e' : '#fff',
        paper: mode === ThemeModes.DARK ? '#252525' : '#fff' 
    }
});