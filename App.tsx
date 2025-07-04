/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

/*放置导航路由的容器，一般只在项目中出现一次，用户不应该嵌套使用它*/
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/routes';
import Main from '@/pages/main/index';
import Register from '@/pages/register/index';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from '@/utils/height';
import Camera from '@/components/camera';
import Detail from '@/pages/detail';
import About from '@/pages/about';
import Setting from '@/pages/setting';
import Login from '@/pages/login';
import Test from '@/pages/test';
import {Provider} from 'react-redux';
import store from '@/store';
import Splash from '@/pages/splash';

// 原生栈导航
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    /*
     * To keep the template simple and small we're adding padding to prevent view
     * from rendering under the System UI.
     * For bigger apps the recommendation is to use `react-native-safe-area-context`:
     * https://github.com/AppAndFlow/react-native-safe-area-context
     *
     * You can read more about it here:
     * https://github.com/react-native-community/discussions-and-proposals/discussions/827
     */

    return (
        <Provider store={store}>
            <NavigationContainer>
                <View style={backgroundStyle}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <View
                        style={[styles.screen, {backgroundColor: isDarkMode ? Colors.black : Colors.white}]}>
                        <Stack.Navigator initialRouteName={'Main'}>
                            <Stack.Screen name={'Main'} component={Main} options={
                                {
                                    headerShown: false,
                                }
                            }/>
                            <Stack.Screen name={'Detail'} component={Detail} options={{title: '详情页'}}/>
                            <Stack.Screen name={'Register'} component={Register} options={{title: '注册'}}/>
                            {/*通过isLogin值的判定，来实现重定向到登录页Login中的，开始设计时默认Main路由(initialRouteName)*/}
                            <Stack.Screen name={'Login'} component={Login} options={{
                                headerShown: false,
                            }}/>
                            <Stack.Screen name={'Setting'} component={Setting} options={{title: '设置'}}/>
                            <Stack.Screen name={'About'} component={About} options={{title: '关于'}}/>
                            <Stack.Screen name={'Camera'} component={Camera} options={{title: '相机'}}/>
                            <Stack.Screen name={'Test'} component={Test} options={{title: '测试'}}/>
                            <Stack.Screen name={'Splash'} component={Splash} options={{headerShown: false}}/>
                        </Stack.Navigator>
                    </View>
                </View>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'pink',
        minHeight: WINDOW_HEIGHT - STATUS_BAR_HEIGHT,
        width: WINDOW_WIDTH,
    },
});

export default App;
