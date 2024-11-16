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
            <Grid2 container justifyContent={'center'} key = {'legend'} spacing={2} sx={{
                width: '90%', margin: 'auto', textAlign: 'center' 
            }}>
                <Grid2 size={1}></Grid2>
                <Grid2 size={7} sx={{ textAlign: 'left' }}>
                    username
                </Grid2>
                <Grid2 size={2}>
                    level
                </Grid2>
                <Grid2 size={2}>
                    points
                </Grid2>
            </Grid2>
            <Grid2 justifyContent={'center'}  sx={{
                width: '100%', margin: 'auto', textAlign: 'center'   
            }}>
                <Divider orientation='horizontal'  variant='middle' sx={{
                    color: theme.palette.primary.main, height: '3px', marginY: '10px', background: theme.palette.primary.main
                }} />
                {/* top10 */}
                {
                    data.map((player, i) => {
                        return(
                            <Grid2 container key = {i} spacing={2} sx={{
                                marginY: '5px',  width: '90%', margin: 'auto' , textAlign: 'center'  
                            }}>
                                <Grid2 size={1}>
                                    {player.position}
                                </Grid2>
                                <Grid2 size={7} sx={{ textAlign: 'left' }}>
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
                    <Grid2 container key = {'userEntry'}  spacing={2} sx={{
                        width: '90%', margin: 'auto', textAlign: 'center'   
                    }}>
                        <Grid2 size={1}>
                            {userEntry.position}
                        </Grid2>
                        <Grid2 size={7} sx={{ textAlign: 'left' }}>
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