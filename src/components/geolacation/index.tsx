import {View, Text, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import Storage from '@/utils/storage';

/**
 * @Desc:获取地理位置
 * @Author: Bao Chengyi
 *
 * npm i @react-native-community/geolocation --save
 *
 * 参数列表，语法：
 * Geolocation.getCurrentPosition(
 * success cb,
 * 'error cb,
 * {配置项}
 * )
 *
 *
 * */
const GeolocationScreen = () => {
    const [coord, setCoord] = useState({});
    useEffect(() => {
        // 每次总是先从本地存储中获取经纬度，不存在才会通getCurrentPosition方法获取

        async function hasLocation() {
            let location = await Storage.get('COORDS');// res可能是字符串，也可能是对象
            if (Object.keys(location)) {// location返回一个对象
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
    return (
        <View>
            <Text>GeolocationScreen</Text>
            <Text>{JSON.stringify(coord)}</Text>
        </View>
    );
};
export default GeolocationScreen;
