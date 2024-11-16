import { Button, Card, Stack, TextField, useTheme } from '@mui/material';
import React from 'react';

export const Login = () => {

    const theme = useTheme();
    
    return(
        <Card sx={{ margin: '10px', paddingY: '10px' }}>
            <Stack useFlexGap spacing = {3} sx={{
                margin: '10px', marginLeft: 'auto', marginRight: 'auto' 
            }}>
                <TextField required id='login' label='Login' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}></TextField>
                <TextField required id='password' label='Password' type='password' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}></TextField>
                <Button sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid', borderColor: theme.palette.primary.main
                }}>Log in</Button>
            </Stack>
        </Card>);
};