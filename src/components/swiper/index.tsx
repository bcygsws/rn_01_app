import {StyleSheet, Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {WINDOW_WIDTH} from '@/utils/height.tsx';

/*滑动轮播图*/
const SwiperScreen = () => {
    return (
        <View style={{flex: 1}}>
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
        </View>);
};
const styles = StyleSheet.create({
    slideImage: {
        height: 200,
        width: WINDOW_WIDTH,
    },

    wrapper: {
        height: 200,
    }
});
export default SwiperScreen;
