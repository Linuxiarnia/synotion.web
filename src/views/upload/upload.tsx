import FileUploadIcon from '@mui/icons-material/FileUpload';
import React from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { t } from 'i18next';
export const Upload = () => {
    return (
        <div style={{
            textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' 
        }}>
            <FileUploadIcon style={{
                fontSize:'20rem',marginTop:'5rem', marginBottom:'2rem' 
            }} onClick={() => console.log('upload')} />
            <FormControlLabel control={<Checkbox />} label={t('I_agree_to_TOS')} style={{ marginBottom: '1rem' }} />
            <Button>{t('Submit')}</Button>
        </div>
    );
};