import { NavBar } from '@components/Navigation';
import { Box, Grid2 } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return<>
        <Grid2 container columns={13} spacing={2}>
            <Grid2 size={2} sx={{ display: 'block' }}>
                <NavBar />
            </Grid2>
            <Grid2 size={11} sx={{ display: 'block' }}>
                <Box>
                    {children}
                </Box>
            </Grid2>
        </Grid2>
        
    </>;
};