import { Button, Checkbox, FormControl, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean, 
    title: string,
    message: string, 
    onAccept: () => void; 
    onClose: () => void;
}

export const ErrorModal: React.FC<ModalProps> = ({
    isOpen, title, message, onAccept, onClose 
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleClose = () => {
        setIsChecked(false);
        onClose();
    };
    const handleAccept = () => {
        setIsChecked(false);
        onAccept();
    };
    return <Modal open={isOpen} sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }} onClose={handleClose}>
        <Stack gap={3} sx={theme => ({
            bgcolor: theme.palette.background.paper, maxWidth: '600px', width: '100%', padding: 5, borderRadius: theme.border.borderRadius
        })}>
            <Typography color='error' variant='h5'>
                {title}
            </Typography>
            <Typography>
                {message}
            </Typography>
            <FormControl>
                <Stack alignItems={'center'} direction='row'>
                    <Button color={'inherit'} onClick={() => setIsChecked(prev => !prev)}>
                        <Checkbox checked={isChecked} name={'errorCheck'} />
                        {'error.modalUnderstand'}
                    </Button>
                </Stack>
            </FormControl>
            <Stack direction='row' gap={2} width={'100%'}>
                <Button fullWidth variant='outlined' onClick={handleClose}>
                    {'error.modalCancel'}
                </Button>
                <Button fullWidth disabled={!isChecked} variant='contained' onClick={handleAccept}>
                    {'error.modalAccept'}
                </Button>
            </Stack>
        </Stack>
    </Modal>;
};