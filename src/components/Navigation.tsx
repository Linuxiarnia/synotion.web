import { Box, Button, ButtonProps, Typography, useTheme } from '@mui/material';
import React from 'react';
// import { useLocation } from 'react-router-dom';

import './Navigation.css';
import styled from '@emotion/styled';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({ color: theme.palette.text.primary }));


export const NavBar = () => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();
    //const location = useLocation();
   
    return(
        <div className='navigation'>

            <span>
                <Box sx={{ bgcolor: 'none' , m: 2 }}>
                    <Typography color='text.primary' variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <div className='navContainer'>
                    <Box><MyButton href = '/'>Icon: Play</MyButton></Box>
                    <Box><MyButton href = '/leaderboards'>Leaderboards</MyButton></Box>
                    <Box><MyButton href = '/profile' sx={{ color: theme.palette.text.primary }}>Profile</MyButton></Box>
                    <Box><MyButton href = '/settings' sx={{ color: theme.palette.text.primary }}>Settings</MyButton></Box>
                </div>
            </span>
            <div className='logoutContainer'>
                <div><MyButton onClick={() => {/* logout */}}>Icon: Log out</MyButton></div>
            </div>
        </div>
    );
};
