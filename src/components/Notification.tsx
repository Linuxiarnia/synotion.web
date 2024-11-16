import { Alert, Stack, Typography } from '@mui/material';
import React from 'react';

export const Notification: React.FC<{ message: string }> = ({ message }) => {
    return <Stack direction={'row'} justifyContent={'center'} width={'100%'}>
        <Alert severity='error' variant='outlined'>
            <Typography fontStyle={'italic'} fontWeight={'bold'}>
                {message}
            </Typography>
        </Alert>
    </Stack>;
};