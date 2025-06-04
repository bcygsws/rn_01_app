import {useEffect, useState} from 'react';
import useCoord from '@/hooks/coord.tsx';
import {Text, View, StyleSheet} from 'react-native';

const LOCATION = {
    'name': '西湖',
    'id': '101210113',
    'lat': '30.27293',
    'lon': '120.14738',
    'adm2': '杭州',
    'adm1': '浙江省',
    'country': '中国',
    'tz': 'Asia/Shanghai',
    'utcOffset': '+08:00',
    'isDst': '0',
    'type': 'city',
    'rank': '35',
    'fxLink': 'https://www.qweather.com/weather/xihu-101210113.html'
};
/**
 * @Desc：根据经纬度坐标，获取城市名称
 * @Author：Bao Chengyi
 *
 * */
const CityScreen = () => {
    const [coord, setCoord] = useState(useCoord());
    const [city, setCity] = useState<any>({});
    useEffect(() => {

        // 2.根据经纬度值,示例：location=123.00,34.45,获取城市名称

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
                // const city=await $http.get('https://jsonplaceholder.typicode.com/posts?userId=2');
                // console.log('city===', city);

                setTimeout(() => {
                    let res = JSON.parse(JSON.stringify(LOCATION));
                    setCity(res);
                }, 1000);

                // 测试聚合数据接口：查询城市实时空气质量:82代表杭州;测试通过
                // const res = await fetch('http://apis.juhe.cn/fapigw/air/live?cityId=82&key=1caac683eb5e15c2ef9c8809d5237c81', {
                //     headers: {
                //         'content-type': 'application/x-www-form-urlencoded'
                //     }
                // });
                // const result = await res.json();
                // console.log('result===', result);


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
        <View style={styles.cityContainer}>
            <Text style={styles.text}>{city?.country}{city?.adm1}{city?.adm2}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    cityContainer: {
        // backgroundColor: 'red',
        height: 40,
        lineHeight: 40,
    },
    text: {
        boxSizing: 'border-box',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
});
export default CityScreen;
