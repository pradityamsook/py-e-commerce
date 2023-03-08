import axios from "axios"

const mainAPI = axios.create({
    baseURL: process.env.REACT_APP_APISERVER,
})

mainAPI.interceptors.request.use((config) => {
    // add token to request headers
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default mainAPI;