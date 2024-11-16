import { Button, Card, Stack, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useProvider } from '@providers/ThemeContext';

export const Login = () => {

    const theme = useTheme();
    const { jwtoken, overWriteToken } = useProvider();
    
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const sendLogin = (login: string, password: string) => {
        const result: string = login + password; //temp;
        //call the api


        overWriteToken(result);
    };

    return(
        <Card sx={{ margin: '10px', paddingY: '10px' }}>
            <Stack useFlexGap spacing = {3} sx={{
                margin: '10px', marginLeft: 'auto', marginRight: 'auto' 
            }}>
                <TextField required id='login' label='Login' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}
                onChange={(e) => setLogin(e.target.value)}></TextField>
                <TextField required id='password' label='Password' type='password' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}
                onChange={(e) => setPassword(e.target.value)}></TextField>
                <Button sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid', borderColor: theme.palette.primary.main
                }}
                onClick={() => sendLogin(login, password)}>Log in</Button>
            </Stack>
        </Card>);
};