import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import './Navigation.css';


export const NavBar = () => {

    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';

    return(
        <div className='navigation'>

            <span>
                <Box sx={{ bgcolor: 'none' , m: 2 }}>
                    <Typography color='primary' variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <div className='navContainer'>
                    <Box><Button href = '/'>Icon: Play</Button></Box>
                    <Box><Button href = '/leaderboards'>Leaderboards</Button></Box>
                    <Box><Button href = '/profile'>Profile</Button></Box>
                    <Box><Button href = '/settings'>Settings</Button></Box>
                </div>
            </span>
            <div className='logoutContainer'>
                <div><Button onClick={() => {/* logout */}}>Icon: Log out</Button></div>
            </div>
        </div>
    );
};
