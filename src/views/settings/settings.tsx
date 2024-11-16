import { Button, Card, FormControlLabel, FormGroup, Grid2, Stack, Switch, TextField, Select, MenuItem } from '@mui/material';
import React from 'react';
import { useProvider } from '@providers/ThemeContext';
import i18n from 'src/i18n';
import { reloadResources } from 'i18next';
import { t } from 'i18next';


export const Settings = () => {

    const { mode, toggleTheme, jwtoken, overWriteToken } = useProvider();
    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [repeatNewPassword, setRepeatNewPassword] = React.useState('');
    
    const handleLanguageChange = (newLanguage:string) => {
        i18n.changeLanguage(newLanguage);
        window.location.reload();
    };

    return(
        <Grid2 container height={'100%'} justifyContent={'center'} marginTop={'10px'} padding={'10px'} width={'100%'}>
            <Grid2 size={12}>
                <Card sx={{ width: '100%', height: '100%' }}>
                    <Stack gap={'1rem'} alignItems={'center'}>
                        <FormGroup aria-label='position'sx={{ marginLeft: '1rem' }}>
                            <FormControlLabel
                                control={<Switch defaultChecked color='primary' onChange={toggleTheme} />}
                                label='Dark Mode'
                                labelPlacement='start'
                                value='meow'
                            />
                            <Select label="Language" onChange={(e) => handleLanguageChange(e.target.value)}  value={i18n.language}>
                                <MenuItem value={'pl'}>Polski</MenuItem>
                                <MenuItem value={'en'}>English</MenuItem>
                            </Select>
                        </FormGroup>
                        <FormGroup aria-label='position' sx={{ width:'15rem', marginLeft: '1rem' }}>
                            <TextField required label={t('password')} type='password' value={currentPassword} variant='filled' onChange={(e) => setCurrentPassword(e.target.value)} />
                            <TextField required label={t('New_password')} type='password' value={newPassword} variant='filled' onChange={(e) => setNewPassword(e.target.value)} />
                            <TextField required label={t('repeat_new_password')} type='password' value={repeatNewPassword} variant='filled' onChange={(e) => setRepeatNewPassword(e.target.value)} />
                            <Button onClick={() => console.log(currentPassword)} > {t('Change')} </Button>
                        </FormGroup>
                    </Stack>
                </Card>
            </Grid2>
            {/* <div>TEST {jwtoken}</div> */}
        </Grid2>
        
    );
};