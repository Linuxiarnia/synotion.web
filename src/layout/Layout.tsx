import { Navigation } from 'src/layout/Navigation';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return <>
        <Stack direction={isMdDown ? 'column' : 'row-reverse'} height={'100vh'} spacing={2} sx={{ overflow: 'hidden' }}>
            <Box sx={{
                width: '100%', height: '100%', overflowY: 'scroll' 
            }}>
                {children}
            </Box>
            <Navigation />
        </Stack>
    </>;
};