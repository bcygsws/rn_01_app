import {useEffect, useState} from 'react';
import Storage from '@/utils/storage.tsx';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

/**
 * @Desc:获取位置信息-经度和纬度
 * @Author: Bao Chengyi
 *
 * */
function useCoord() {
    const [coord, setCoord] = useState({latitude: 0, longitude: 0});
    useEffect(() => {
        // 每次总是先从本地存储中获取经纬度，不存在才会通getCurrentPosition方法获取

        async function hasLocation() {
            let location = await Storage.get('COORDS');// res可能是字符串，也可能是对象
            console.log('location===', location);// undefined或者{latitude: 0,longitude: 0}

            // 如果本地存储中存在经纬度，或者{}空对象；值调用getLocation()方法获取
            if (location && Object.keys(location)) {// location返回一个对象
                setCoord(location);
            } else {
                getLocation();
            }
        }

        hasLocation();

        // getCurrentPosition(success cb,error cb,{配置项})

        function getLocation() {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    console.log(position.coords);//
                    let {latitude, longitude} = position.coords;
                    Storage.set('COORDS', {latitude, longitude}); // 存储一个经纬度键对象
                    setCoord({latitude, longitude});
                },
                (error) => {
                    Alert.alert(`${error.message}`);
                },
                {
                    enableHighAccuracy: true, // 是否使用高精度定位，默认为true
                    timeout: 15000, // 超时时间
                    maximumAge: 10000 // 最长等待时间
                }
            );
        }
    }, []);

    return coord;
}

export default useCoord;
