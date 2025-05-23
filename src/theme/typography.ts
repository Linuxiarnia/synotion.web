import { Palette } from '@mui/material';
import createTypography from '@mui/material/styles/createTypography';

export const typography = (palette: Palette) => createTypography(palette, {
    fontFamily: 'Mulish', 
    allVariants: { fontWeight: 'bold', color: palette.getContrastText(palette.background.default) }, 
    body1: { fontWeight: 'normal' }, 
    body2: { fontWeight: 'normal' }
});