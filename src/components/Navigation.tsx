import { Box, Button, ButtonProps, Grid2, Stack, Theme, useTheme } from '@mui/material';
import React from 'react';


import styled from '@emotion/styled';
import { Leaderboard, Person, PlayArrow, Settings } from '@mui/icons-material';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme, href }) => ((href==window.location.pathname)? { color: (theme as Theme).palette.primary.main } : { color: (theme as Theme).palette.text.primary }));


export const NavBar = () => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();
 
    console.log(location);

    return(
        <Grid2 container sx={{
            borderRightColor: theme.palette.primary.main, borderWidth: '3px', borderRightStyle: 'solid' , height: '100%'
        }}>

            <Grid2 size = {2} sx={{ width:'80%', margin: 'auto' }}>
                <Box sx={{ color: theme.palette.primary.main }}>
                    Synoption
                </Box>
            </Grid2>
            <Grid2 size = {9} sx={{
                width: '80%', margin: 'auto', marginTop: '0px' 
            }}>
                <Stack direction='row' spacing={2}><PlayArrow color={('/game'==window.location.pathname)?'primary':'inherit'}></PlayArrow><MyButton href='/game'>Play</MyButton></Stack>
                <Stack direction='row' spacing={2}><Leaderboard color={('/leaderboards'==window.location.pathname)?'primary':'inherit'}></Leaderboard><MyButton href = '/leaderboards'>Leaderboards</MyButton></Stack>
                <Stack direction='row' spacing={2}><Person color={('/profile'==window.location.pathname)?'primary':'inherit'}></Person><MyButton href = '/profile'>Profile</MyButton></Stack>
                <Stack direction='row' spacing={2}><Settings color={('/settings'==window.location.pathname)?'primary':'inherit'}></Settings><MyButton href = '/settings'>Settings</MyButton></Stack>
            </Grid2>
            <Grid2 size = {1} sx = {{
                width: '80%', margin: 'auto', marginBottom: '10px' 
            }}>
                <MyButton onClick={() => {/* logout */}}>Icon: Log out</MyButton>
            </Grid2>
        </Grid2>
    );
};
