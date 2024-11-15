import { Divider, Grid2 } from '@mui/material';
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

const data: playerEntry[] = [];

const userEntry: playerEntry = {
    position: 0,
    username: 'placeholder',
    level: 0,
    points: 0
};

export const Leaderboards = () => {
    return(
        <Grid2 columns={1}>
            {/* top10 */}
            {
                data.map((player, i) => {
                    return(
                        <Grid2 key = {i}>
                            <Grid2 size={2}>
                                {player.position}
                            </Grid2>
                            <Grid2 size={10}>
                                {player.username}
                            </Grid2>
                            <Grid2 size = {4}>
                                {player.level}
                            </Grid2>
                            <Grid2 size = {4}>
                                {player.points}
                            </Grid2>
                        </Grid2>
                    );
                })
            }
            {isInTop? '' :              
                <Divider flexItem orientation='horizontal' />
            }
            {isInTop? '':
                <Grid2 key = {'userEntry'}>
                    <Grid2 size={2}>
                        {userEntry.position}
                    </Grid2>
                    <Grid2 size={10}>
                        {userEntry.username}
                    </Grid2>
                    <Grid2 size = {4}>
                        {userEntry.level}
                    </Grid2>
                    <Grid2 size = {4}>
                        {userEntry.points}
                    </Grid2>
                </Grid2>
            }


        </Grid2>
    );
};