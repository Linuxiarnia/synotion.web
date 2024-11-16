import React from 'react';
import { useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Box } from '@mui/system';

export interface StreakProps {
    streak: number;
}

export const Streak = ({ streak }: StreakProps) => {
    const theme = useTheme();
    return (
        <Box fontStyle={{ textAlign: 'center' }}>
            <WhatshotIcon style={{ fontSize:'20rem', color: theme.palette.primary.main }}/>
            <br/>
            { streak } days streak
        </Box>
    );
};