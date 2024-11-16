import { Navigation } from 'src/layout/Navigation';
import { Box, Stack } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return <>
        <Stack direction='row' spacing={2} sx={{ overflowX: 'hidden' }}>
            <Navigation />
            <Box sx={{ width: '100%' }}>
                {children}
            </Box>
        </Stack>
        
    </>;
};