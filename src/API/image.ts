import axios from 'axios';


export type image = {
    author: string;
    url: string;
}

export async function imageCard(URL:string): Promise<image[]> {
    const res = await axios.get(URL);
    const data = await res.data;
    const setImageData: image[] = [];
    
    for (const val of data) {
        setImageData.push({
            author: val.author,
            url: val.download_url
        })
    }

    return setImageData as image[];
    
}