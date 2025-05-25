import {Camera, useCameraDevice, useCameraDevices, useCameraPermission} from 'react-native-vision-camera';
import {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ActivityIndicator, Platform, Alert
} from 'react-native';
// 该包需要额外配置，参考：https://github.com/react-native-cameraroll/react-native-cameraroll
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useIsFocused} from '@react-navigation/native';
import {useAppState} from '@react-native-community/hooks';

const CameraScreen = () => {

    const {hasPermission, requestPermission} = useCameraPermission();
    const device = useCameraDevice('back', {
        physicalDevices: ['ultra-wide-angle-camera']
    });
    const camera = useRef<Camera>(null);
    /**
     * useAppState当应用程序关闭或置于后台时，将在“活动”、“后台”或（iOS）“非活动”之一之间更改
     * useIsFocused根据屏幕当前的焦点状态呈现不同的内容,例如导航到新屏幕时,
     * 使用此挂钩会触发组件的重新渲染
     */
    const isFocused = useIsFocused();
    const appState = useAppState();
    const isActive = isFocused && appState === 'active';
    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission]);
    if (!hasPermission) {
        return (<ActivityIndicator/>);
    }
    if (!device) {
        return <Text>Camera device not found</Text>;
    }
    const saveImage = async (photo: any) => {
        const path = Platform.OS === 'android' ? 'file://' + photo.path : photo.path;
        // 使用CameraRoll保存到相册
        CameraRoll.saveToCameraRoll(path, 'photo').then(() => {
            Alert.alert('图片成功保存到相册');
        }).catch((err) => {
            console.log('err===', err);
            Alert.alert('图片保存失败');
        });

    };
    const takeLocalPhoto = async () => {
        if (camera.current) {
            try {
                const photo = await camera.current.takePhoto();
                console.log('photo===', photo);
                photo.id = new Date().getTime().toString();// 添加一个唯一id
                saveImage(photo);// 将路径传递过去
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <View style={{flex: 1}}>
            <Camera
                ref={camera}
                style={styles.abusfell}
                device={device}
                isActive={isActive}
                photo={true}
            />
            <Pressable onPress={takeLocalPhoto} style={styles.test}/>
        </View>
    );

};
const styles = StyleSheet.create({
    abusfell: {
        flex: 1
    },
    test: {
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 75,
        bottom: 10,
        height: 75,
        opacity: 0.4,
        position: 'absolute',
        width: 75
    },

});
export default CameraScreen;
