import { Button, Card, Stack, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useProvider } from '@providers/ThemeContext';

export const Login = () => {

    type loginResponse = {
        token: string;
    };

    const theme = useTheme();
    const {
        userLogin, overWriteLogin, jwtoken, overWriteToken, changeLogin 
    } = useProvider();
    
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const sendLogin = async (login: string, password: string) => {
        // const result: string = login + password; //temp;
        //call the api
        try {
            // 👇️ const response: Response
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                body: JSON.stringify({
                    username: login,
                    password: password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = (await response.json()) as loginResponse;
        
            console.log('result is: ', JSON.stringify(result, null, 4));
            //update data
            overWriteToken(result.token); //token stored as jwtoken 
            changeLogin(login);

        
            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
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