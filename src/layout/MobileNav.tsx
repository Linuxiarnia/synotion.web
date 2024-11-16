import { BrowseGallery, Gamepad, Person, Settings, Upload } from '@mui/icons-material';
import { Stack, useTheme } from '@mui/material';
import React from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';



export const MobileNav: React.FC = () => {
    const theme = useTheme();
    const generateFill = (href: string) => {
        if (window.location.href.toLowerCase() === href.toLowerCase()) {
            return theme.palette.primary.main;
        } else {
            return theme.palette.text.primary;
        }
    };
    return <Stack bgcolor={theme.palette.background.paper} bottom='0' direction={'row'} justifyContent={'space-between'} p={4} position={'sticky'} width={'100%'} zIndex={4}>
        <Link to='/gallery'>
            <BrowseGallery sx={{ color: generateFill('/profile') }}  />
        </Link>
        <Link to='/profile' onClick={() => {console.log('navigate');}}>
            <Person sx={{ color: generateFill('/profile') }}/>
        </Link>
        <Link to='/game'>
            <Gamepad sx={{ color: generateFill('/game') }} />
        </Link>
        <Link to='/leaderboards'>
            <LeaderboardIcon sx={{ color: generateFill('/leaderboards') }} />
        </Link>
        <Link to='/settings'>
            <Settings sx={{ color: generateFill('/settings') }} /> 
        </Link>
        <Link to='/upload'>
            <Upload sx={{ color: generateFill('/upload') }} /> 
        </Link>
    </Stack>;
};