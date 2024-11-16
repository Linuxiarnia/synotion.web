import { Card, FormControlLabel, FormGroup, Grid2, Switch } from '@mui/material';
import React from 'react';
import { useTheme } from 'src/context/ThemeContext';


export const Settings = () => {

    const { mode, toggleTheme } = useTheme();

    return(
        <Grid2 container height={'100%'} justifyContent={'center'} marginTop={'10px'} padding={'10px'} width={'100%'}>
            <Card sx={{ width: '80%', height: '80%' }}>
                <FormGroup row aria-label='position'>
                    <FormControlLabel
                        control={<Switch defaultChecked color='primary' onChange={toggleTheme} />}
                        label='Dark Mode'
                        labelPlacement='start'
                        value='meow'
                    />
                </FormGroup>
            </Card>
        </Grid2>
    );
};