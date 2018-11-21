import axios from 'axios';
import { baseUrl } from '../config/index';

const axiosInstance = axios.create ({
    baseURL : baseUrl
})
console.log("baseUrl",baseUrl);
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, (error) => {
    console.log(error)
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, (error) => {
    console.log(error)
    return error
})

export default axiosInstance;
