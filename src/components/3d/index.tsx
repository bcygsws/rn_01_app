import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useEffect, useState} from 'react';
import useCoord from '@/hooks/coord.tsx';
// import {get3dWeatherAPI} from '@/apis/location.tsx';

/**
 * @Desc:三天天气的展示
 *
 * */
const THREE_WEATHER = [
    {
        'fxDate': '2025-06-02',
        'sunrise': '04:49',
        'sunset': '19:38',
        'moonrise': '10:51',
        'moonset': '00:20',
        'moonPhase': '蛾眉月',
        'moonPhaseIcon': '801',
        'tempMax': '31',
        'tempMin': '15',
        'iconDay': '101',
        'textDay': '多云',
        'iconNight': '150',
        'textNight': '晴',
        'wind360Day': '315',
        'windDirDay': '西北风',
        'windScaleDay': '1-3',
        'windSpeedDay': '16',
        'wind360Night': '315',
        'windDirNight': '西北风',
        'windScaleNight': '1-3',
        'windSpeedNight': '3',
        'humidity': '19',
        'precip': '0.0',
        'pressure': '998',
        'vis': '25',
        'cloud': '13',
        'uvIndex': '11'
    },
    {
        'fxDate': '2025-06-03',
        'sunrise': '04:48',
        'sunset': '19:39',
        'moonrise': '11:56',
        'moonset': '00:45',
        'moonPhase': '上弦月',
        'moonPhaseIcon': '802',
        'tempMax': '31',
        'tempMin': '16',
        'iconDay': '100',
        'textDay': '晴',
        'iconNight': '150',
        'textNight': '晴',
        'wind360Day': '315',
        'windDirDay': '西北风',
        'windScaleDay': '1-3',
        'windSpeedDay': '16',
        'wind360Night': '315',
        'windDirNight': '西北风',
        'windScaleNight': '1-3',
        'windSpeedNight': '3',
        'humidity': '20',
        'precip': '0.0',
        'pressure': '1000',
        'vis': '25',
        'cloud': '0',
        'uvIndex': '11'
    },
    {
        'fxDate': '2025-06-04',
        'sunrise': '04:48',
        'sunset': '19:39',
        'moonrise': '12:58',
        'moonset': '01:06',
        'moonPhase': '盈凸月',
        'moonPhaseIcon': '803',
        'tempMax': '34',
        'tempMin': '20',
        'iconDay': '100',
        'textDay': '晴',
        'iconNight': '151',
        'textNight': '多云',
        'wind360Day': '225',
        'windDirDay': '西南风',
        'windScaleDay': '1-3',
        'windSpeedDay': '3',
        'wind360Night': '225',
        'windDirNight': '西南风',
        'windScaleNight': '1-3',
        'windSpeedNight': '3',
        'humidity': '24',
        'precip': '0.0',
        'pressure': '996',
        'vis': '25',
        'cloud': '0',
        'uvIndex': '11'
    }
];
const ThreeDaysWeather = () => {
    const [threeWeather, setThreeWeather] = useState<any>();
    const coord = useCoord();
    console.log('coord', coord);
    useEffect(() => {
        async function get3dWeather() {
            // const res=await get3dWeatherAPI(coord);
            // console.log(res?.daily);
            // setThreeWeather(res?.daily);

            setTimeout(() => {
                const res = JSON.stringify(THREE_WEATHER);
                setThreeWeather(JSON.parse(res));
                console.log(threeWeather);
            }, 1000);
        }

        get3dWeather();

    }, []);

    return (<>
        {threeWeather?.map((item: any, index: number) => {
            return (
                <View key={index} style={styles.wrapper}>
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.linearGradient}
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 0.0}}
                    >
                        <Text style={styles.buttonText}>
                            {item?.textDay}
                        </Text>
                    </LinearGradient>
                </View>);
        })}
    </>);
};
const styles = StyleSheet.create({
    buttonText: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        fontFamily: 'Gill Sans',
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
    },
    linearGradient: {
        borderRadius: 15,
        flex: 1,
        marginVertical: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    wrapper: {
        flex: 1,
        height: 100,
    }
});
export default ThreeDaysWeather;
