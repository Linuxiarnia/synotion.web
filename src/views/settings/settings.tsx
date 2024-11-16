import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React from 'react';
import { useTheme } from 'src/context/ThemeContext';


export const Settings = () => {

    const { mode, toggleTheme } = useTheme();

    return(
        <>
            <FormGroup row aria-label='position'>
                <FormControlLabel
                    control={<Switch defaultChecked color='primary' onChange={toggleTheme} />}
                    label='Dark Mode'
                    labelPlacement='start'
                    value='meow'
                />
            </FormGroup>
        </>
    );
};