import { Button, Card, FormControlLabel, FormGroup, Grid2, Stack, Switch, TextField } from '@mui/material';
import React from 'react';
import { useProvider } from '@providers/ThemeContext';


export const Settings = () => {


    const { mode, toggleTheme, jwtoken } = useProvider();
    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [repeatNewPassword, setRepeatNewPassword] = React.useState('');


    return(
        <Grid2 container height={'100%'} justifyContent={'center'} marginTop={'10px'} padding={'10px'} width={'100%'}>
            <Grid2 size={12}>
                <Card sx={{ width: '100%', height: '100%' }}>
                    <Stack alignItems={'center'}>
                        <FormGroup aria-label='position'sx={{ marginLeft: '1rem' }}>
                            <FormControlLabel
                                control={<Switch defaultChecked color='primary' onChange={toggleTheme} />}
                                label='Dark Mode'
                                labelPlacement='start'
                                value='meow'
                            />
                        </FormGroup>
                        <FormGroup aria-label='position' sx={{ width:'10rem', marginLeft: '1rem' }}>
                            <TextField required label='Current password' type='password' value={currentPassword} variant='filled' onChange={(e) => setCurrentPassword(e.target.value)} />
                            <TextField required label='New password' type='password' value={newPassword} variant='filled' onChange={(e) => setNewPassword(e.target.value)} />
                            <TextField required label='repeat new password' type='password' value={repeatNewPassword} variant='filled' onChange={(e) => setRepeatNewPassword(e.target.value)} />
                            <Button onClick={() => console.log(currentPassword)} > Change </Button>
                        </FormGroup>
                    </Stack>
                </Card>
            </Grid2>
        </Grid2>
    );
};