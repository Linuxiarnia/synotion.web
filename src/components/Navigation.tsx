import { Box, Button, ButtonProps, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';


import './Navigation.css';
import styled from '@emotion/styled';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme, href }) => ((href==window.location.pathname)? { color: (theme as Theme).palette.primary.main } : { color: (theme as Theme).palette.text.primary }));


export const NavBar = ({ location } : { location: string }) => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();
 
    console.log(location);

    return(
        <Box className='navigation' sx={{
            borderRightColor: theme.palette.primary.main, borderWidth: '3px', borderRightStyle: 'solid' 
        }}>

            <span>
                <Box sx={{ bgcolor: 'none' , m: 2 }}>
                    <Typography color={theme.palette.primary.main} variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <div className='navContainer'>
                    <Box><MyButton href='/'>Icon: Play</MyButton></Box>
                    <Box><MyButton href = '/leaderboards'>Leaderboards</MyButton></Box>
                    <Box><MyButton href = '/profile'>Profile</MyButton></Box>
                    <Box><MyButton href = '/settings'>Settings</MyButton></Box>
                </div>
            </span>
            <div className='logoutContainer'>
                <div><MyButton onClick={() => {/* logout */}}>Icon: Log out</MyButton></div>
            </div>
        </Box>
    );
};
