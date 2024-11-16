import { BrowseGallery, Gamepad, Person, Settings } from '@mui/icons-material';
import { IconButton, Link, Stack, useTheme } from '@mui/material';
import React from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';



export const MobileNav: React.FC = () => {
    const theme = useTheme();
    const generateFill = (href: string) => {
        if (window.location.href.toLowerCase() === href.toLowerCase()) {
            return theme.palette.primary.main;
        } else {
            return theme.palette.text.primary;
        }
    };
    return <Stack bgcolor={theme.palette.background.paper} bottom='0' direction={'row'} justifyContent={'space-between'} position={'sticky'} px={4} py={2} width={'100%'} zIndex={4}>
        <IconButton LinkComponent={Link} href='/gallery'>
            <BrowseGallery sx={{ color: generateFill('/gallery') }}  />
        </IconButton>
        <IconButton LinkComponent={Link} href='/profile'>
            <Person sx={{ color: generateFill('/profile') }}/>
        </IconButton>
        <IconButton LinkComponent={Link} href='/game'>
            <Gamepad sx={{ color: generateFill('/game') }} />
        </IconButton>
        <IconButton LinkComponent={Link} href='/leaderboards'>
            <LeaderboardIcon sx={{ color: generateFill('/leaderboards') }} />
        </IconButton>
        <IconButton LinkComponent={Link} href='/settings'>
            <Settings sx={{ color: generateFill('/settings') }} /> 
        </IconButton> 
    </Stack>;
};