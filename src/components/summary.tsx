import { Box, Card } from '@mui/material';
import React from 'react';

export interface summaryElemnts {
    n: string;
    v: number;
}

export interface SummaryProps {
    summary: summaryElemnts[];
}

export const Summary = ({ summary }: SummaryProps) => {
    return (
        <Card style={{ padding: '10px' }} sx={{ height: '100%' }}>
            <center><h1>Summary</h1></center>
            <table style={{ width:'80%', margin: 'auto' }}>
                {summary.map((element, index) => {
                    return (
                        <tr key={index} >
                            <td style={{ textAlign: 'left' }}>{element.n}</td>
                            <td style={{ textAlign: 'right' }}>{element.v}</td>
                        </tr>
                
                    );
                })}
            </table>
        </Card>
    );
};
