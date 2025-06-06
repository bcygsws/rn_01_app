import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from '@/utils/height.tsx';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';

type NavProps = NavigationProp<RootStackParamList, 'Profile'>;
const Profile = () => {
    const navigation = useNavigation<NavProps>();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingHorizontal: WINDOW_WIDTH / 50,
                        boxSizing: 'border-box',
                        backgroundColor: '#eeeeee',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                            width: '100%',
                        }}>
                        <Image source={require('@/assets/images/img01.jpg')} style={styles.image}/>
                    </View>
                    {/*设置和关于*/}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Setting');
                        }}
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 36,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                flex: 1
                            }}>
                            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <Ionicons name={'settings-outline'} color={'green'} size={16}/>
                                <Text style={{marginLeft: 5}}>设置</Text>
                            </View>
                            <Ionicons name={'arrow-forward-outline'} color={'#999'} size={16}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('About');
                        }}
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 36,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                flex: 1,
                            }}>
                            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <Ionicons name={'information-circle-outline'} color={'green'} size={16}/>
                                <Text style={{marginLeft: 5}}>关于</Text>
                            </View>
                            <Ionicons name={'arrow-forward-outline'} color={'#999'} size={16}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 36,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                flex: 1,
                            }}>
                            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <Ionicons name={'enter-outline'} color={'green'} size={16}/>
                                <Text style={{marginLeft: 5}}>登录</Text>
                            </View>
                            <Ionicons name={'arrow-forward-outline'} color={'#999'} size={16}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Register');
                        }}
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 36,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                flex: 1,
                                backgroundColor: '#ccc',
                            }}>
                            <Ionicons name={'exit-outline'} color={'green'} size={16}/>
                            <Text style={{marginLeft: 5}}>退出</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    container: {
        height: WINDOW_HEIGHT - STATUS_BAR_HEIGHT,
        width: WINDOW_WIDTH
    },
    image: {
        borderRadius: 35,
        height: 70,
        marginVertical: 15,
        width: 70,
    }
});
export default Profile;
