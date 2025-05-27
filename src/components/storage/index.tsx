import {View, Button, StyleSheet, Alert} from 'react-native';
import Storage from '@/utils/storage.tsx';

/**
 * @Desc；Async Storage-异步存储的使用
 *
 * */
const AsyncStorageScreen = () => {
    const saveStorage = async (value: string) => {
        try {
            await Storage.set('MY_KEY', value);
            console.log('存储成功');
        } catch (error) {
            console.log('存储失败', error);
        }
    };
    const getStorage = async () => {
        try {
            const value = await Storage.get('MY_KEY');
            if (!value) {// value为null，给用户一个提示
                Alert.alert('storage里空空如也~');
            }
            console.log('获取成功', value);
        } catch (error) {
            console.log('获取失败', error);
        }
    };
    const delStorage = async () => {
        try {
            await Storage.delete('MY_KEY');
            console.log('删除成功');
        } catch (error) {
            console.log('删除失败', error);
        }
    };
    return (
        <View style={styles.container}>
            <Button title={'存储'} onPress={() => saveStorage('1234')}/>
            <Button title={'获取'} onPress={getStorage}/>
            <Button title={'删除'} onPress={delStorage}/>
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
