import {View, Text, Alert, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import Storage from '@/utils/storage';
import {$http} from '@/utils';

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

        async function getCity() {
            try {
                // const city = await $http.get('geo/v2/city/lookup', {
                //     // headers: {
                //     //     'Access-Control-Allow-Headers': 'Content-Type, X-QW-Api-Key',
                //     //     'Access-Control-Allow-Origin': '*',
                //     //     'X-QW-Api-Key': 'b88d0a14a2034fe2a3abf4c6c7f1af85'
                //     // },
                //     params: {
                //         key: 'b88d0a14a2034fe2a3abf4c6c7f1af85',
                //         location: `${coord.longitude},${coord.latitude}`,
                //         gzip: 'no',
                //         lang: 'zh'
                //     }
                // });
                const city=await $http.get('https://jsonplaceholder.typicode.com/posts?userId=2');
                console.log('city===', city);
            } catch (e) {
                console.log('city get error===', e);
            }

            // try {
            //     // const res = await fetch(`https://n63p3xwu98.re.qweatherapi.com/geo/v2/city/lookup?key=b88d0a14a2034fe2a3abf4c6c7f1af85&location=${coord.longitude},${coord.latitude}&gzip=n`);
            //     const res = await fetch(`https://n63p3xwu98.re.qweatherapi.com/geo/v2/city/lookup?key=b88d0a14a2034fe2a3abf4c6c7f1af85&location=${coord.longitude},${coord.latitude}&gzip=n`);
            //     const city = await res.json();
            //     console.log('city===', city);
            //
            // } catch (e) {
            //     console.log('city get error===', e);
            // }


        }

        getCity();

    }, []);
    return (
        <View style={styles.geolocation}>
            <Text/>
        </View>
    );
};
const styles = StyleSheet.create({
    geolocation: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
});
export default GeolocationScreen;
