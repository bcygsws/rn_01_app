import {StyleSheet} from 'react-native';
import {RootStackParamList} from '../../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../news';
import Profile from '../profile';
import NativeStack from '../stack';
import Home from '../home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();
// 一级路由Main，还有Register等等
const Main = () => {
    return (<Tab.Navigator screenOptions={({route}) => ({
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
            return <Ionicons name={iconName!} size={size} color={color}/>;
        },
        headerShown: false,
    })}>
        <Tab.Screen name={'Home'} component={Home}/>
        <Tab.Screen name={'News'} component={News}/>
        <Tab.Screen name={'NativeStack'} component={NativeStack}/>
        <Tab.Screen name={'Profile'} component={Profile}/>
    </Tab.Navigator>);
};
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Main;
