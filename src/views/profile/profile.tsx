import { Graph } from '@components/graph';
import { Streak } from '@components/streak';
import { Summary } from '@components/summary';
import { UserElement } from '@components/userElement';
import { Grid2 } from '@mui/material';
import React from 'react';

import { UserElementProps } from '@components/userElement';
import { SummaryProps, summaryElemnts } from '@components/summary';
import { StreakProps } from '@components/streak';
import { dataType, GraphProps } from '@components/graph';

interface profileActivityData{
    UUID: string,
    count: number,
    timestamp: Date
};


export const Profile = () => {
    let userElement: UserElementProps = {
        img: 'data-from-api',
        name: 'fucku',
        message: 'lmaoe'
    };

    let streakData: StreakProps = { streak: 2137 };

    let graphDataTable: dataType = {
        name: 'place',
        uv: 21,
        pv: 37,
        amt: 69
    };

    let graphData: dataType[] = [graphDataTable];

    const summaryElements: summaryElemnts = {
        n: 'amo',
        v: 123
    };

    const summaryTable: summaryElemnts[] = [summaryElements];

    const getProfileData = () => {
        //call API with data for components  
        
        //get user element
        userElement = {
            img: 'data-from-api',
            name: 'fucku',
            message: 'lmaoe'
        };
    
        //get all elements for summary
        //bruh
    
        //get streak
        streakData = { streak: 2137 };
    
        //get graphs data
        graphDataTable = {
            name: 'place',
            uv: 21,
            pv: 37,
            amt: 69
        };
        graphData = [graphDataTable];
    
    };

    return(
        <div>
            <UserElement img={userElement.img} message={userElement.message} name={userElement.name}></UserElement>
            <Grid2 container spacing={2} sx={{ padding: '10px' }}>
                <Grid2 size = {12}>
                    <Graph data={graphData}></Graph>
                </Grid2>
                <Grid2 size = {6}>
                    <Summary summary={summaryTable}></Summary>
                </Grid2>
                <Grid2 size = {6}>
                    <Streak streak={streakData.streak}></Streak>
                </Grid2>
            </Grid2>
        </div>
    );
};