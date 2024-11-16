import React from 'react';
import { Box, Button, ButtonProps, Stack, styled, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Gamepad,Logout } from '@mui/icons-material';
import { t } from 'i18next';

//myButton zwraca blad, ale dziala lol
const MyButton = styled(Button)<ButtonProps>(({ theme, href }) => ({ color: href === window.location.pathname ? theme.palette.primary.main : theme.palette.text.primary }));


export const DesktopNav: React.FC = () => {
    // type Page = 'Home' | 'Leaderboards' | 'Profile' | 'Settings';
    const theme = useTheme();

    return(
        <Stack justifyContent={'space-between'} width={'100%'} sx={{
            borderRightColor: theme.palette.primary.main, borderWidth: '3px', borderRightStyle: 'solid', maxWidth: '300px', height: '100vh'
        }}>

            <Box>
                <Box sx={{ bgcolor: 'none' , m: 2 }}>
                    <Typography color={theme.palette.primary.main} variant='body1'>
                        placeholderLogo
                    </Typography>
                </Box>  
                <Stack>
                    <Link to='/game'><MyButton><Gamepad />: {t('Play')}</MyButton></Link>
                    <Link to='/leaderboards'><MyButton>{t('Leaderboards')}</MyButton></Link>
                    <Link to='/profile'><MyButton >{t('Profile')}</MyButton></Link>
                    <Link to='/settings'><MyButton>{t('Settings')}</MyButton></Link>
                    <Link to='/gallery'><MyButton>{t('User_Gallery')}</MyButton></Link>
                    <Link to='/upload'><MyButton>{t('upload')}</MyButton></Link>
                </Stack>
            </Box>
            <div>
                <MyButton onClick={() => {/* logout */}}><Logout />: { t('Log_out')}</MyButton>
            </div>
        </Stack>
    );
};
