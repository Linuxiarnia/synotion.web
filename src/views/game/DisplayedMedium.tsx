import { Alert, AlertTitle, Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useGameProvider } from '@hooks/useGameProvider';
import { ErrorModal } from '@components/ErrorModal';
import { t } from 'i18next';

// tutaj ma być wyświetlane medium, które aktualnie jest wyświetlane

export const DisplayedMedium: React.FC = () => {
    const { currentMedia, isReportModalOpen, toggleReport } = useGameProvider();

    const handleReportAccept = () => {
        toggleReport();
    };

    return <>
        <ErrorModal isOpen={isReportModalOpen} message={'media.reportQuestion'} title={'media.report'} onAccept={handleReportAccept} onClose={toggleReport}/>
        <Box sx={() => ({
            borderRadius: 5, width: 'fit-content', overflow: 'hidden' 
        })}>
            {
                currentMedia === undefined
                    ? <Alert sx={{ height: '100%', minHeight: '200px' }} variant='filled'>
                        <AlertTitle>{t('media.couldntLoad')}</AlertTitle>
                        <Typography>{t('media.somethingWentWrong')}</Typography>
                        <Button variant='contained'>
                            reload
                        </Button>
                    </Alert>
                    : <Box alt='image didnt load' component={'img'} maxWidth={'350px'} src={currentMedia?.image} width={'100%'} />
            }
        </Box>
    </>;
};