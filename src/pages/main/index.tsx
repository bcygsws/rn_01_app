// import {StyleSheet} from 'react-native';
import {RootStackParamList} from '@/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../news/index';
import Profile from '../profile/index';
import NativeStack from '../stack/index';
import Home from '../home/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator<RootStackParamList>();

// 一级路由Main，还有Register等一级路由组件
type NavProps = NavigationProp<RootStackParamList, 'Main'>;
const Main = () => {
    const navigation = useNavigation<NavProps>();
    const {isLogin} = useSelector((state: any) => state.auth);
    return isLogin ? (<Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'News') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'NativeStack') {
                iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName!} color={color} size={size}/>;
        },
        headerShown: true
    })}>
        <Tab.Screen name={'Home'} component={Home} options={
            {
                headerShown: true,
                headerTitle: '首页',
                headerTintColor: 'white',
                headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    <Text style={{color: 'white', marginRight: 10, fontSize: 18}}>
                        拍照
                    </Text>
                </TouchableOpacity>),
                headerStyle: {
                    backgroundColor: '#02B38D',
                    elevation: 0,// 删除android header  阴影
                    shadowOpacity: 0,// 删除ios header  阴影
                },
                title: '首页'
            }
        }/>
        <Tab.Screen name={'News'} component={News} options={{
            title: '新闻'
        }}/>
        <Tab.Screen name={'NativeStack'} component={NativeStack}/>
        <Tab.Screen name={'Profile'} component={Profile} options={{
            title: '我的'
        }}/>
    </Tab.Navigator>) : (<>{navigation.navigate('Login')}</>);
};




// const styles = StyleSheet.create({
//     homeContainer: {
//         alignItems: 'center',
//         flex: 1,
//         justifyContent: 'center',
//     },
// });

export default Main;
