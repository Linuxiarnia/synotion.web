import { Box, Button, ButtonProps, Grid2, Stack, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';


import styled from '@emotion/styled';
import { Margin } from '@mui/icons-material';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme, href }) => ((href==window.location.pathname)? { color: (theme as Theme).palette.primary.main } : { color: (theme as Theme).palette.text.primary }));


export const NavBar = () => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();
 
    console.log(location);

    return(
        <Grid2 container alignContent='center' spacing={70} sx={{
            
            borderRightColor: theme.palette.primary.main, borderWidth: '3px', borderRightStyle: 'solid' , height: '100%'
        }}>

            <Grid2 size = {11} sx={{ width:'80%', margin: 'auto' }}>
                <Box sx={{ paddingY: '10px', marginBottom: '70px' }}>
                    placeholderLogo
                </Box>
                <Box><MyButton href='/game'>Icon: Play</MyButton></Box>
                <Box><MyButton href = '/leaderboards'>Leaderboards</MyButton></Box>
                <Box><MyButton href = '/profile'>Profile</MyButton></Box>
                <Box><MyButton href = '/settings'>Settings</MyButton></Box>
            </Grid2>
            <Grid2 size = {1} sx = {{ width: '80%', margin: 'auto' }}>
                <MyButton onClick={() => {/* logout */}}>Icon: Log out</MyButton>
            </Grid2>
        </Grid2>
    );
};
