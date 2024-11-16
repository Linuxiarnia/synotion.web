import { useGameProvider } from '@hooks/useGameProvider';
import { Box, Typography } from '@mui/material';
import React from 'react';

export const GameCounter: React.FC = () => {
    const { selectedAmount } = useGameProvider();
    return <Box>
        <Typography>{'media.counter'}{selectedAmount}</Typography>
    </Box>;
};