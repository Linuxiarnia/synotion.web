import { Box, Button } from '@mui/material';
import React from 'react';
import { useGameProvider } from '@hooks/useGameProvider';
import { ErrorModal } from '@components/ErrorModal';

// tutaj ma być wyświetlane medium, które aktualnie jest wyświetlane

export const DisplayedMedium: React.FC = () => {
    const { currentMedia, isReportModalOpen, toggleReport, start } = useGameProvider();

    const handleReportAccept = () => {
        toggleReport();
    };

    return <>
        <ErrorModal isOpen={isReportModalOpen} message={'media.reportQuestion'} title={'media.report'} onAccept={handleReportAccept} onClose={toggleReport}/>
        <Box sx={theme => ({
            borderRadius: theme.border.borderRadius, width: 'fit-content', overflow: 'hidden' 
        })}>
            <Box alt='image didnt load' component={'img'} maxWidth={'350px'} src={currentMedia?.image} width={'100%'} />
        </Box>
        <Button onClick={start}>
            start
        </Button>
    </>;
};