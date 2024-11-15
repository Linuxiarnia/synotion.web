import { Box } from '@mui/material';
import React from 'react';

interface summaryElemnts {
    n: string;
    v: number;
}

interface SummaryProps {
    summary: summaryElemnts[];
}

export const Summary = (props: SummaryProps) => {
    return (
        <Box style={{ width:'100%'/*tutaj szerokość summary do edycji :) */ }}>
            <h1>Summary</h1>
            <table style={{ width:'100%' }}>
                {props.summary.map((element, index) => {
                    return (
                        <tr key={index} >
                            <td style={{ textAlign: 'left' }}>{element.n}</td>
                            <td style={{ textAlign: 'right' }}>{element.v}</td>
                        </tr>
                
                    );
                })}
            </table>
        </Box>
    );
};
