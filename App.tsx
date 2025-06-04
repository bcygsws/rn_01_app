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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/routes';
import Main from '@/pages/main/index';
import Register from '@/pages/register/index';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from '@/utils/height';
import Camera from '@/components/camera';


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
                            <Stack.Screen name={'Register'} component={Register}/>
                            <Stack.Screen name={'Camera'} component={Camera} options={{title: '相机'}}/>
                        </Stack.Navigator>
                    </View>
            </View>
        </NavigationContainer>
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
