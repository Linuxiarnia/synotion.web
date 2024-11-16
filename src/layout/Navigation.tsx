import { DesktopNav } from '@layout/DesktopNav';
import { MobileNav } from '@layout/MobileNav';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export const Navigation: React.FC = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    return isMdDown
        ? <MobileNav />
        : <DesktopNav />;
};