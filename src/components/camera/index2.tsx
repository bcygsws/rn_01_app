// /**
//  * @Desc:react-native-camera实现相机功能
//  * 参考文档：https://blog.csdn.net/qq_44094296/article/details/131472192
//  *
//  *
//  * */
//
// import React, {useRef} from 'react';
// import {
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//     Dimensions,
//     Alert,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
//
// //配置RNCamera注意事项:https://blog.csdn.net/qq_44094296/article/details/131472192
//
// function CameraScreen() {
//     const camera = useRef(null);
//     const takePicture = async () => {
//         if (camera.current) {
//             const options = {
//                 quality: 0.5,
//                 base64: false,
//                 width: Dimensions.get('window').width / 2,
//                 height: Dimensions.get('window').height / 2,
//             };
//             const data = await camera.current.takePictureAsync(options);
//             Alert.alert(data);
//         }
//     };
//     return (
//         <View style={styles.container}>
//             <RNCamera
//                 ref={camera}
//                 style={styles.preview}
//                 type={RNCamera.Constants.Type.back} // 表示使用前置摄像头还是后摄像头
//                 flashMode={RNCamera.Constants.FlashMode.on} // 是否开启闪光灯
//                 // 普通摄像头授权提示
//                 androidCameraPermissionOptions={{
//                     title: 'Permission to use camera',
//                     message: 'We need your permission to use your camera',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }}
//                 // 带录音功能的摄像头授权提示
//                 androidRecordAudioPermissionOptions={{
//                     title: 'Permission to use audio recording',
//                     message: 'We need your permission to use your audio',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }}
//                 // 条形码扫码事件
//                 onGoogleVisionBarcodesDetected={({barcodes}) => {
//                     console.log(barcodes);
//                 }}
//
//             />
//             <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//                 <TouchableOpacity
//                     onPress={takePicture}
//                     style={styles.capture}>
//                     <Text style={{fontSize: 14}}> SNAP </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     capture: {
//         alignSelf: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         flex: 0,
//         margin: 20,
//         padding: 15,
//         paddingHorizontal: 20,
//     },
//     container: {
//         backgroundColor: 'black',
//         flex: 1,
//         flexDirection: 'column',
//     },
//     preview: {
//         alignItems: 'center',
//         flex: 1,
//         justifyContent: 'flex-end',
//     },
// });
//
// export default CameraScreen;
