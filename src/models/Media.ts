export interface Media {
    id: string;
    happy: number;
    sad: number;
    fear: number;
    anger: number;
    disgust: number;
    surprise: number;
}

export interface MediaPayload {
    id: string;
    image: string;
}