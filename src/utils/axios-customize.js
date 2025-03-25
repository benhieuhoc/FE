import axios from "axios";

const baseUrl =  "http://localhost:3001";
console.log("baseUrl:", baseUrl);

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,  
});

export const handleLoginSuccess = (token) => {
    localStorage.setItem('access_tokenUser', token);
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    window.location.reload();
};

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response && response.data ? response.data : response;
}, function (error) {
    return error?.response?.data ?? Promise.reject(error);
});

export default instance;
