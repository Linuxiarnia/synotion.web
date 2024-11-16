import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const Upload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!selectedFile) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('https://example.com/upload', {
            method: 'POST',
            body: formData,
        });
    };

    return (
        <div style={{
            textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' 
        }}>
            <input
                id='file-input'
                style={{ display: 'none' }}
                type='file'
                onChange={handleFileChange}
            />
            <label htmlFor='file-input'>
                <FileUploadIcon
                    style={{
                        fontSize: '20rem', marginTop: '5rem', marginBottom: '2rem', cursor: 'pointer' 
                    }}
                    onClick={handleUploadClick}
                />
            </label>
            <FormControlLabel
                control={<Checkbox />}
                label='I agree to TOS'
                style={{ marginBottom: '1rem' }}
            />
            <Button onClick={handleUploadClick}>Submit</Button>
        </div>
    );
};