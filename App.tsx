/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './routes';
import Main from './views/main';
import Register from './views/register';
import {HEADER_HEIGHT, STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from "./utils/height.tsx";


const Stack = createNativeStackNavigator<RootStackParamList>();
const safePadding = '5%';


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
                <ScrollView
                    style={backgroundStyle}>
                    <View
                        style={[styles.screen, {backgroundColor: isDarkMode ? Colors.black : Colors.white}]}>
                        <Stack.Navigator initialRouteName={'Main'}>
                            <Stack.Screen name={'Main'} component={Main} options={
                                {
                                    headerShown: true,
                                    headerTitle: '首页',
                                    headerRight: () => (<View>
                                        <Text style={{color: 'white'}}>
                                            拍照
                                        </Text>
                                    </View>),
                                    headerStyle: {
                                        backgroundColor: '#02B38D',
                                    },
                                }
                            }/>
                            <Stack.Screen name={'Register'} component={Register}/>
                        </Stack.Navigator>
                    </View>
                </ScrollView>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: WINDOW_WIDTH,
        minHeight: WINDOW_HEIGHT - STATUS_BAR_HEIGHT,
        backgroundColor: 'pink',
    },
});

export default App;
