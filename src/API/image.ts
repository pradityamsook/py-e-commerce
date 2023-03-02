import axios from 'axios';
import { imageCard, imageCardState } from '../state/recoil_state';
import { useRecoilState } from 'recoil';


// export async function getImage(URL:string): Promise<imageCard[]> {
//     const [image, setImage] = useRecoilState(imageCardState);
//     const storeImage: imageCard[] = [];
//     await axios.get(URL).then(response => {
//         response.data.forEach((element: { author: any; url: any; }) => {
//             storeImage.push({
//                 author: element.author,
//                 url: element.url
//             })
//         });
//         setImage(storeImage);
//     });
//     console.log(image);

//     return image as imageCard[];
// }