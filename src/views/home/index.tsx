import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WINDOW_WIDTH} from '@/utils/height.tsx';
import Swiper from 'react-native-swiper';
// 获取地理位置组件@react-native-community/geolocation
import Geolocation from '@react-native-community/geolocation';
import AsyncStorageScreen from '@/components/storage';
import GeolocationScreen from '@/components/geolacation';

const Home = () => {
    return (<View>
        {/*屏幕中内容可能超过高度，添加一个ScrollView*/}
        <ScrollView>
            <View style={{flex: 1, flexDirection: 'row'}}>
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
            <View>
                <Swiper style={styles.wrapper}
                        showsButtons={true}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={2.5}
                >
                    <Image source={require('@/assets/images/img01.jpg')} style={styles.slideImage}/>
                    <Image source={require('@/assets/images/img02.jpg')} style={styles.slideImage}/>
                    <Image source={require('@/assets/images/img03.jpg')} style={styles.slideImage}/>
                </Swiper>
            </View>

            <AsyncStorageScreen/>
            <GeolocationScreen/>
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
    slideImage: {
        height: 200,
        width: WINDOW_WIDTH,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapper: {
        height: 200,
    }
});
export default Home;
