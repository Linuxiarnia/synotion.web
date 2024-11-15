import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

import './Navigation.css';


export const NavBar = () => {

    type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';

    const [currentPage, setCurrentPage] = useState<Page>('Home');
    console.log(currentPage);

    return(
        <div className='navigation'>

            <span>
                <Box sx={{ bgcolor: 'primary.light' }}>
                    <Typography color='primary' variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <div className='navContainer'>
                    <Box><Button onClick={() => setCurrentPage('Home')}>Icon: Play</Button></Box>
                    <Box><Button onClick={() => setCurrentPage('Leaderboards')}>Leaderboards</Button></Box>
                    <Box><Button onClick={() => setCurrentPage('Profile')}>Profile</Button></Box>
                    <Box><Button onClick={() => setCurrentPage('Settings')}>Settings</Button></Box>
                </div>
            </span>
            <div className='logoutContainer'>
                <div><Button onClick={() => {/* logout */}}>Icon: Log out</Button></div>
            </div>
        </div>
    );
};
