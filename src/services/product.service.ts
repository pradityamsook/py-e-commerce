import mainAPI from './main.service';

const API = process.env.REACT_APP_APISERVER;

export const fetchProduct = async () => {
    return await mainAPI.get(API + 'product')
        .then(res => res.data.result)
        .catch(error => console.error(error));
}

export const fetchProductById = async (productId: number) => {
    return await mainAPI.put(API + 'product/${producId}')
        .then(res => res.data.result)
        .catch(error => console.error(error));
}