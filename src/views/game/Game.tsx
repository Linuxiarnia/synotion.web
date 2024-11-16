import { Stack } from '@mui/material';
import React from 'react';
import { DisplayedMedium } from '@views/game/DisplayedMedium';
import { Controls } from '@views/game/Controls';
import { GameProvider } from '@providers/GameProvider';
import { GameCounter } from '@components/GameCounter';

export const Game: React.FC = () => {
    return <Stack alignItems={'center'} height={'100%'} justifyContent={'space-between'}>
        <GameProvider>
            <GameCounter />
            <DisplayedMedium />
            <Controls />
        </GameProvider>
    </Stack>;
};
