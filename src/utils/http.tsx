import axios from 'axios';

const $http = axios.create({
    // baseURL: 'https://n63p3xwu98.re.qweatherapi.com/',
    // baseURL: '',
    timeout: 5000,
});

// 请求和响应拦截器
$http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

$http.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    }
);

export default $http;
