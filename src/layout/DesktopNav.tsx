import React from 'react';
import { Box, Button, ButtonProps, Stack, styled, Typography, useTheme, Link } from '@mui/material';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme, href }) => ({ color: href === window.location.pathname ? theme.palette.primary.main : theme.palette.text.primary }));


export const DesktopNav: React.FC = () => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();

    return(
        <Stack width={'100%'} sx={{
            borderRightColor: theme.palette.primary.main, borderWidth: '3px', borderRightStyle: 'solid', maxWidth: '300px'
        }}>

            <span>
                <Box sx={{ bgcolor: 'none' , m: 2 }}>
                    <Typography color={theme.palette.primary.main} variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <Stack height={'100%'} minHeight={'1000px'}>
                    <Box><MyButton LinkComponent={Link} href='/game'>Icon: Play</MyButton></Box>
                    <Box><MyButton LinkComponent={Link} href = '/leaderboards'>Leaderboards</MyButton></Box>
                    <Box><MyButton LinkComponent={Link} href = '/profile'>Profile</MyButton></Box>
                    <Box><MyButton LinkComponent={Link} href = '/settings'>Settings</MyButton></Box>
                </Stack>
            </span>
            <div className='logoutContainer'>
                <div><MyButton onClick={() => {/* logout */}}>Icon: Log out</MyButton></div>
            </div>
        </Stack>
    );
};
