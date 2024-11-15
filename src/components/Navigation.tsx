import { Button } from '@mui/material';
import React, { useState } from 'react';


import './Navigation.css';

export const NavBar = () => {

    type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';

    const [currentPage, setCurrentPage] = useState<Page>('Home');
    console.log(currentPage);

    return(
        <div className='navigation'>
            <span>
                <div className='logoContainer'>
                    LOGO HERE
                </div>
                <div className='navContainer'>
                    <div><Button onClick={() => setCurrentPage('Home')}>Icon: Play</Button></div>
                    <div><Button onClick={() => setCurrentPage('Leaderboards')}>Leaderboards</Button></div>
                    <div><Button onClick={() => setCurrentPage('Profile')}>Profile</Button></div>
                    <div><Button onClick={() => setCurrentPage('Settings')}>Settings</Button></div>
                </div>
            </span>
            <div className='logoutContainer'>
                <Button onClick={() => {/* logout */}}>Log out</Button>
            </div>
        </div>
    );
};
