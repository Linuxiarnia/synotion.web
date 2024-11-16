import { useGameProvider } from '@hooks/useGameProvider';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import React from 'react';

export const GameCounter: React.FC = () => {
    const { selectedAmount } = useGameProvider();
    return <Box py={2}>
        <Typography variant='h5'>{t('media.counter')}{selectedAmount}</Typography>
    </Box>;
};