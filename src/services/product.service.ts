import mainAPI from './main.service';
import { useRecoilState } from 'recoil';
import { productState } from '../state/recoil_state';

export const fetchProduct = async () => {
    return await mainAPI.get(process.env.REACT_APP_APISERVER + 'product')
        .then(res => res.data.result)
        .catch(error => console.error(error))
}