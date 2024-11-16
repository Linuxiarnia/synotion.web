import React from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
export const Upload = () => {
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FileUploadIcon style={{ fontSize:'20rem',marginTop:'5rem', marginBottom:'2rem' }} onClick={() => console.log('upload')} />
            <FormControlLabel control={<Checkbox />} label='I agree to TOS' style={{ marginBottom: '1rem' }} />
            <Button>Submit</Button>
        </div>
    );
};