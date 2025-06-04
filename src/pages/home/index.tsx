import {View, Text, ScrollView,  TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from '@/utils/height.tsx';
// 获取地理位置组件@react-native-community/geolocation
import SwiperScreen from '@/components/swiper';
import IndicesScreen from '@/components/indices';
import CityScreen from '@/components/city';
import ThreeDaysWeather from '@/components/3d';

const Home = () => {
    return (<View style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT - STATUS_BAR_HEIGHT, overflow: 'scroll'}}>
        <ScrollView style={{width: WINDOW_WIDTH}}>
            {/*屏幕中内容可能超过高度，添加一个ScrollView  Touch Button+Swiper+CityName=总高度330*/}
            <View style={{height: 330}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <Ionicons name={'scan-outline'} color={'white'} size={40}/>
                            <Text style={styles.itemText}>扫一扫</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <Ionicons name={'qr-code-outline'} color={'white'} size={40}/>
                            <Text style={styles.itemText}>付款码</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <Ionicons name={'trail-sign-outline'} color={'white'} size={40}/>
                            <Text style={styles.itemText}>出行</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <Ionicons name={'card-outline'} color={'white'} size={40}/>
                            <Text style={styles.itemText}>卡包</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/*滑动轮播图*/}
                <SwiperScreen/>
                {/*城市名称*/}
                <CityScreen/>

            </View>
            {/*<AsyncStorageScreen/>*/}
            {/*原因是：GeolocationScreen中嵌套又FlatList组件，他放在ScrollView中，会引发性能问题*/}
            {/*<GeolocationScreen/>*/}
            <IndicesScreen/>
            <ThreeDaysWeather/>
            <View>
                <Text style={{textAlign: 'center', color: '#333', fontSize: 14}}>Copyright 2025
                    京ICP证030173号</Text>
            </View>
        </ScrollView>
    </View>);
};
const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        backgroundColor: '#02B38D',
        height: 90,
        justifyContent: 'center',
        width: WINDOW_WIDTH / 4,
    },
    itemText: {
        color: 'white',
        marginTop: 5,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

});
export default Home;
