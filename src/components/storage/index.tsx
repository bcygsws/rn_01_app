import {View, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @Desc；Async Storage-异步存储的使用
 *
 * */
const AsyncStorageScreen = () => {
    const saveStorage = async (value: string) => {
        try {
            await AsyncStorage.setItem('key', value);
            console.log('存储成功');
        } catch (error) {
            console.log('存储失败', error);
        }
    };
    const getStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('key');
            console.log('获取成功', value);
        } catch (error) {
            console.log('获取失败', error);
        }
    };
    return (
        <View style={styles.container}>
            <Button title={'存储'} onPress={() => saveStorage('1234')}/>
            <Button title={'获取'} onPress={getStorage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default AsyncStorageScreen;
