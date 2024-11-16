import { Button, Card, Stack, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useProvider } from '@providers/ThemeContext';
import { Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();
    type registerResponse = {
        token: string;
    };
    type loginResponse = {
        token: string;
    };

    const theme = useTheme();
    const {
        userLogin, overWriteLogin, jwtoken, overWriteToken, changeLogin 
    } = useProvider();
    
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const sendRegister = async (name: string, email:string, password: string) => {
        //call the api
        try {
            // 👇️ const response: Response
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    mail: email,
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
        
            // const result = (await response.json()) as registerResponse;
        
            // console.log('result is: ', JSON.stringify(result, null, 4));
            //update data
  
            //login
            try {
                // 👇️ const response: Response
                const response = await fetch('http://localhost:8080', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: email,
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
                changeLogin(email);
                navigate('/');
            
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