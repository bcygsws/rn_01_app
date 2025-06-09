/**
 * @Desc:根据经纬度值：获取城市名称、天气指数
 * 和风天气接口：https://dev.qweather.com/docs/api/
 *
 * */
import axios from 'axios';

export interface ILocation {
    latitude: number;
    longitude: number;
}


const getCityAPI = (location: ILocation) => {
    const {latitude, longitude} = location;
    return axios.request({
        url: 'https://n63p3xwu98.re.qweatherapi.com/geo/v2/city/lookup',
        // url: 'https://10.0.2.2/geo/v2/city/lookup',
        method: 'GET',
        params: {
            location: `${longitude},${latitude}`,
            key: 'b88d0a14a2034fe2a3abf4c6c7f1af85',
            gzip: 'n',
            lang: 'zh'
        }
    });
};


const getIndicesAPI = (location: ILocation) => {
    const {latitude, longitude} = location;
    return axios.request({
        url: 'https://n63p3xwu98.re.qweatherapi.com/v7/indices/1d',
        method: 'GET',
        params: {
            location: `${longitude},${latitude}`,
            key: 'b88d0a14a2034fe2a3abf4c6c7f1af85',
            gzip: 'n',
            lang: 'zh'
        }
    });
};

const get3dWeatherAPI = (location: ILocation) => {
    const {latitude, longitude} = location;
    return axios.request({
        url: 'https://n63p3xwu98.re.qweatherapi.com/v7/indices/1d',
        method: 'GET',
        params: {
            location: `${longitude},${latitude}`,
            key: 'b88d0a14a2034fe2a3abf4c6c7f1af85',
            gzip: 'n',
            lang: 'zh'
        }
    });
};
export {
    getCityAPI,
    getIndicesAPI,
    get3dWeatherAPI
};
