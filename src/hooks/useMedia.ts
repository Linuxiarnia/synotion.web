import { useState } from 'react';
// import { getMedia } from '@services/mediaService';
import { MediaPayload } from '@models/Media';
import woman from '@assets/woman.jpg';
import ungry from '@assets/ungry.jpg';
import kekw from '@assets/kekw.jpg';
import kaplan from '@assets/kaplan.jpg';


export const useMedia = () => {
    const [media, setMedia] = useState<Array<MediaPayload>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchMedia = async () => {
        // TODO!: fetch data from backend
        try {
            // const data = await getMedia();
            setLoading(true);
            console.log('fetch');
            const data = [
                { image:woman, id: 'jfaa03923' },
                { image:ungry, id: 'jfaa2fdu84' },
                { image:kekw, id: 'jfaa0394841' },
                { image:kaplan, id: 'jfaa0394xxd' }
            ];
            setMedia(data);
            console.log(data);
        } catch (err) {
            console.error(err);
            setMedia([]);
        } finally {
            setLoading(false);
        }
    };

    return {
        refresh: fetchMedia, media, loading 
    };
};