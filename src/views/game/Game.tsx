import { Stack } from '@mui/material';
import React from 'react';
import { DisplayedMedium } from '@views/game/DisplayedMedium';
import { Controls } from '@views/game/Controls';
import { GameProvider } from '@providers/GameProvider';

export const Game: React.FC = () => {
    return <Stack alignItems={'center'} justifyContent={'center'}>
        <GameProvider>
            <DisplayedMedium />
            <Controls />
        </GameProvider>
    </Stack>;
};
