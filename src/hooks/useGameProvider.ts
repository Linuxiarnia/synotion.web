import { GameContext } from '@providers/GameProvider';
import { useContext } from 'react';

export const useGameProvider = () => {
    const values = useContext(GameContext);
    return values;
};