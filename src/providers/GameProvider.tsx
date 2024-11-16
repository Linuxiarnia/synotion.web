import { useMedia } from '@hooks/useMedia';
import { Media, MediaPayload } from '@models/Media';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

interface GameProps {
    selectedAmount: number;
    mediaScores: Array<Media>;
    currentMedia?: MediaPayload;
    loading: boolean;
    isReportModalOpen: boolean;
    addMedia: (media: Media) => void;
    changeMedia: () => void;
    start: () => void;
    toggleReport: () => void;
}

export const GameContext = createContext<GameProps>({
    selectedAmount: 0, mediaScores: [], currentMedia: { image: '', id: '' }, loading: true, addMedia(){}, changeMedia(){}, start(){}, isReportModalOpen: false, toggleReport(){}
});

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { media, loading, refresh } = useMedia();
    const [loadedMedia, setLoadedMedia] = useState<Array<MediaPayload>>(media);
    const [summary, setSummary] = useState<Array<Media>>([]);
    const [currentMedia, setCurrentMedia] = useState<MediaPayload>(media[0]);
    const [amountCount, setAmountCount] = useState<number>(0);
    const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const addMedia = (newMedia: Media) => {
        const newSummary = summary;
        newSummary.push(newMedia);
        setSummary(newSummary);
    };

    const changeMedia = () => {
        const newMedia = Array.from(loadedMedia);
        const removed = newMedia.shift();
        setAmountCount(prev => {
            return ++prev;
        });
        setCurrentMedia(newMedia[0]);
        setLoadedMedia(newMedia);
        
    };

    const start = () => {
        refresh().then(() => {
            setCurrentMedia(media[0]);
            setLoadedMedia(media);
            setIsRunning(true);
        });
    };

    const toggleReport = () => {
        setIsReportModalOpen(prev => !prev);
    };

    useEffect(() => {
        if (!isRunning && currentMedia === undefined) {
            start();
            setCurrentMedia(media[0]);
        }
    });

    return <GameContext.Provider value={{
        selectedAmount: amountCount, mediaScores: [], currentMedia, loading, isReportModalOpen, addMedia, changeMedia, start, toggleReport
    }}>
        {children}
    </GameContext.Provider>;
};