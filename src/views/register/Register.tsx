import { Button, Card, Stack, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useProvider } from '@providers/ThemeContext';
import { Email } from '@mui/icons-material';

export const Login = () => {

    const theme = useTheme();
    const { jwtoken, overWriteToken } = useProvider();
    
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const sendRegister = (login: string,email:string, password: string) => {
        const result: string = login + email + password; //temp;
        //call the api


        overWriteToken(result);
    };

    return(
        <Card sx={{ margin: '10px', paddingY: '10px' }}>
            <Stack useFlexGap spacing = {3} sx={{
                margin: '10px', marginLeft: 'auto', marginRight: 'auto' 
            }}>
                <TextField required id='email' label='Email' type='email' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}
                onChange={(e) => setEmail(e.target.value)}></TextField> 
                <TextField required id='name' label='name' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}
                onChange={(e) => setName(e.target.value)}></TextField>
                <TextField required id='password' label='Password' type='password' sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto' 
                }}
                onChange={(e) => setPassword(e.target.value)}></TextField>
                <Button sx={{
                    width: '90%', padding: '10px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid', borderColor: theme.palette.primary.main
                }}
                onClick={() => sendRegister(name,email, password)}>Register</Button>
            </Stack>
        </Card>);
};