import React from 'react';
import { useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Box } from '@mui/system';

interface StreakProps {
    message: string;
}

export const Streak = ({ message }: StreakProps) => {
    const theme = useTheme();
    return (
        <Box fontStyle={{ textAlign: 'center' }}>
            <WhatshotIcon style={{ fontSize:'20rem', color: theme.palette.primary.light }}/>
            <br/>
            { message }
        </Box>
    );
};