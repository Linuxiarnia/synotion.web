import { NavBar } from '@components/Navigation';
import { Box, Grid2 } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return<>
        <Grid2 container columns={16} spacing={2}>
            <Grid2 size={3} sx={{ display: 'block' }}>
                <NavBar />
            </Grid2>
            <Grid2 size={13} sx={{ display: 'block' }}>
                <Box>
                    {children}
                </Box>
            </Grid2>
        </Grid2>
        
    </>;
};