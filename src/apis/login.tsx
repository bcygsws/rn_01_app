import {$http} from '@/utils';

export interface loginData {
    username: string;
    password: string;
}

const loginAPI = (val: loginData) => {
    console.log('val===', val);
    const {username, password} = val;
    return $http.request({
        // url: 'http://localhost:3000/api/v1/auth/signin',
        // 在安卓模拟器中，本地接口中的localhost地址为10.0.2.2
        url: 'http://10.0.2.2:3000/api/v1/auth/signin',
        method: 'POST',
        data: {
            username,
            password,
        }
    });
};
export {
    loginAPI
};
