import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface dataType {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}
interface GraphProps {
    data: dataType[];
}

export const Graph = (props: GraphProps) => {
    
    const theme = useTheme();
    return (
        <Box style={{
            height: '20rem', width: '40rem', textAlign: 'center' 
        }}>
            <ResponsiveContainer>
                <BarChart data={props.data}>
                    <XAxis dataKey='name' tick={{ stroke: theme.palette.text.primary }}/>
                    <YAxis tick={{ stroke: theme.palette.text.primary }}/>
                    <Bar dataKey='uv' fill={theme.palette.primary.main} />
                </BarChart>
            </ResponsiveContainer>
            <text> Obecny tydzień </text>
        </Box>
    );
};
