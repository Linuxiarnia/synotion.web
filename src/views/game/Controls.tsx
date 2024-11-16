import { Notification } from '@components/Notification';
import { useGameProvider } from '@hooks/useGameProvider';
import { Restore } from '@mui/icons-material';
import { Button, Grid2, Stack, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

const emotions = [
    'controls.happy',
    'controls.sad',
    'controls.fear',
    'controls.anger',
    'controls.disgust',
    'controls.surprise',
];

// TODO: different button colors

const severity: Array<CardsPrios> = [
    'error',
    'warning',
    'info'
];

type CardsPrios = 'error' | 'warning' | 'info' | 'secondary';


export const Controls: React.FC = () => {
    const theme = useTheme();
    const { changeMedia, toggleReport } = useGameProvider();
    const [selectedControls, setSelectedControls] = useState<Set<string>>(new Set());
    const [currentMessage, setCurrentMessage] = useState<string>();

    const handleClick = (emotion: string) => {
        const newControls = new Set(selectedControls);
        if (selectedControls.has(emotion)) {
            newControls.delete(emotion);
        } else {
            if (newControls.size === 3) return;
            newControls.add(emotion);
        }
        setSelectedControls(newControls);
    };

    const handleNext = () => {
        changeMedia();
        setSelectedControls(new Set());
    };

    const handleReset = () => {
        const newControls = new Set<string>();
        setSelectedControls(newControls);
    };

    const getEmotionOrder = (emotion: string) => {
        const controlArr = Array.from(selectedControls);
        const index = controlArr.indexOf(emotion);
        return index;
    };
    const getColor: (index: number) => CardsPrios = (index: number) => index === -1 ? 'secondary' : severity[index];

    const updateMessage = () => {
        if (selectedControls.size === 0) {
            setCurrentMessage('controls.noEmotionsSelected');
            return;
        }
        setCurrentMessage(undefined);
    };

    useEffect(() => {
        updateMessage();
    }, [selectedControls]);

    return <Grid2 container maxWidth={'1200px'} p={2} spacing={2} width={'100%'}>
        <Grid2 size={6} sx={{ color: theme.palette.getContrastText(theme.palette.background.default) }}>
            <Button color='inherit' variant='outlined' onClick={handleReset}>
                <Restore sx={{ fill: theme.palette.getContrastText(theme.palette.background.default) }}/>
            </Button>
        </Grid2>
        <Grid2 size={6} textAlign={'right'}>
            <Button color='error' variant={'outlined'} onClick={toggleReport}>
                report media
            </Button>
        </Grid2>
        {emotions.map((emotion, index) => {
            const severity = getEmotionOrder(emotion);
            const color = getColor(severity);
            return <Grid2 key={`${emotion}-${index}`} size={{
                xs: 12, md: 6, lg: 4 
            }}>
                <Button fullWidth color={color} variant='contained' onClick={() => handleClick(emotion)}>
                    {severity === -1 ? '' : `${severity + 1}. `}{emotion}
                </Button>
            </Grid2>; }
        )}
        <Grid2 size={12}>
            <Stack direction={'row'} gap={2}  justifyContent={'center'} width={'100%'}>
                {currentMessage !== undefined 
                    ? <Notification message={currentMessage} />
                    : <Button color='success' variant='contained' onClick={handleNext}>
                        {'controls.next'}
                    </Button>
                }
                <Button color='info' variant='outlined'>
                    {'controls.quit'}
                </Button>
            </Stack>
        </Grid2>
    </Grid2>;
};