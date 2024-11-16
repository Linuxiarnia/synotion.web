import { config } from 'src/config';

export const getMedia = async () => {
    return await fetch(`${config.api}/media`).then((r) => r.json());
};