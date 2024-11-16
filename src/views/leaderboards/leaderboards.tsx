import { Box, Card, Divider, Grid2, useTheme } from '@mui/material';
import React from 'react';

interface playerEntry{
    position: number
    username: string,
    level: number,
    points: number
}

let isInTop: boolean = false;

const getLeaderboard = () => {


    isInTop = false; //or true idk
};

const data: playerEntry[] = [
    {
        position: 1,
        username: 'placeholder',
        level: 123,
        points: 312 
    },
    {
        position: 1,
        username: 'placeholder',
        level: 123,
        points: 312 
    }
];

const userEntry: playerEntry = {
    position: 0,
    username: 'placeholder',
    level: 0,
    points: 0
};

export const Leaderboards = () => {

    const theme = useTheme();

    return(
        <Card sx={{
            padding: '10px', margin: '10px', height: '80%' 
        }}>
            <center><h1>LEADERBOARD</h1></center>
            <Grid2 container key = {'legend'}  spacing={2}>
                <Grid2 size={8}>
                    username
                </Grid2>
                <Grid2 size={2}>
                    level
                </Grid2>
                <Grid2 size={2}>
                    points
                </Grid2>
            </Grid2>
            <Grid2 justifyContent={'center'}>
                {/* top10 */}
                {
                    data.map((player, i) => {
                        return(
                            <Grid2 container key = {i} spacing={2} sx={{ marginY: '5px' }}>
                                <Grid2 size={1}>
                                    {player.position}
                                </Grid2>
                                <Grid2 size={7}>
                                    {player.username}
                                </Grid2>
                                <Grid2 size={2}>
                                    {player.level}
                                </Grid2>
                                <Grid2 size={2}>
                                    {player.points}
                                </Grid2>
                            </Grid2>
                        );
                    })
                }
                {isInTop? '' :              
                    <Divider orientation='horizontal'  variant='middle' sx={{
                        color: theme.palette.primary.main, height: '3px', marginY: '10px', background: theme.palette.primary.main
                    }} />
                }
                {isInTop? '':
                    <Grid2 container key = {'userEntry'}  spacing={2}>
                        <Grid2 size={1}>
                            {userEntry.position}
                        </Grid2>
                        <Grid2 size={7}>
                            {userEntry.username}
                        </Grid2>
                        <Grid2 size={2}>
                            {userEntry.level}
                        </Grid2>
                        <Grid2 size={2}>
                            {userEntry.points}
                        </Grid2>
                    </Grid2>
                }


            </Grid2>
        </Card>
    );
};