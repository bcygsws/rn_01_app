import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';
import { WINDOW_WIDTH} from '@/utils/height';

type NavProps = NavigationProp<RootStackParamList, 'Splash'>;
const Splash = () => {
    const navigation = useNavigation<NavProps>();
    return (
        <View style={{height: '100%'}}>
            <ImageBackground source={require('@/assets/images/img02.jpg')} resizeMode={'cover'} style={styles.imgBg}>
                <StatusBar hidden={true}/>
                <Animatable.View
                    animation="slideInDown"
                    duration={2000}
                    direction="alternate"
                    style={{flex: 1}}
                >
                    <Text style={styles.world}>看更大的世界！</Text>
                </Animatable.View>
                <Animatable.View
                    animation={'slideInUp'}
                    duration={2000}
                    direction="alternate"
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}>
                        {/*默认渐变方向是垂直向下的*/}
                        {/*<LinearGradient colors={['#eee', '#111']}*/}
                        <LinearGradient colors={['#08d4c4', '#2196f3']}
                                        style={styles.gradient}
                        >
                            <Text style={styles.go}>走起</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    go: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    gradient: {
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginBottom: 140,
        width: WINDOW_WIDTH / 2,
    },
    imgBg: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    world: {
        color: '#2196f3',
        fontSize: 30,
        fontStyle: 'italic',
        paddingTop: 180,
    }
});
export default Splash;
