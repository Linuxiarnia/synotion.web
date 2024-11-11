import { Components, Palette } from '@mui/material';

export const componentOverrides = (palette: Palette) => {
    const styles: Components = {
        MuiCssBaseline: { styleOverrides: { 'body': { background: palette.background }, '*': { transition: '150ms ease-in' }}},
        MuiButton: { 
            defaultProps: { sx: { fontWeight: 'bold' }},
            variants: [
                { 
                    props: { variant: 'outlined' },
                    style: { borderWidth: '2px' }
                }
            ]
        }
    };
    return styles;
};