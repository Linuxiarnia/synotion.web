import React from 'react';
import { Card, Typography, useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Box } from '@mui/system';

export interface StreakProps {
    streak: number;
}

export const Streak = ({ streak }: StreakProps) => {
    const theme = useTheme();
    return (
        <Card sx={{ height: '100%', paddingY: '10vh' }}>
            <Box fontStyle={{ textAlign: 'center' }}>
                <WhatshotIcon style={{ fontSize:'15rem', color: theme.palette.primary.main }}/>
                <br/>
                <Typography color={theme.palette.primary.main} sx={{ fontSize: '4vw' }}>{ streak } days streak</Typography>
            </Box>
        </Card>
    );
};