/**
 * @Desc；登录页布局
 * @Author：Bao Chengyi
 *
 * */
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Platform,
    ScrollView,
    TextInput,
    TouchableOpacity, Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT} from '@/utils/height.tsx';
import {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '@/store/modules/authStore.tsx';
import {loginAPI} from '@/apis/login.tsx';

const LoginScreen = () => {
        // 当前输入的账号信息：info
        // 测试账号：bcygsws@gmail.com 123456
        const [info, setInfo] = useState({username: 'bcygsws@gmail.com', password: '123456'});
        // 输入的用户名或者密码是否有效
        const [isUserValid, setIsUserValid] = useState(false);
        const [isPwdValid, setIsPwdValid] = useState(false);
        // 控制是否隐藏密码
        const [textSecure, setTextSecure] = useState(true);
        // 控制密码的显示或者隐藏
        const showRef = useRef<Animatable.View>(null);
        // 监听账号和密码框是否获得焦点
        const userRef = useRef<TextInput>(null);
        const pwdRef = useRef<TextInput>(null);

        const dispatch = useDispatch();
        // 操作时，传递的参数e，就是用户名或密码本身了
        // 规则：用户长度>=2,密码长度>=6
        useEffect(() => {
            info.username.length >= 2 ? setIsUserValid(true) :
                (info.username.length > 0 ? setIsUserValid(false) : setIsUserValid(true));
            info.password.length >= 6 ? setIsPwdValid(true) :
                (info.password.length > 0 ? setIsPwdValid(false) : setIsPwdValid(true));
        }, [info]);
        const validateUser = (e: string) => {
            // 实时跟踪info的值
            setInfo({...info, username: e});
            // info的监听，实现了以下功能，注释掉

            // if (e.trim().length >= 2) {
            //     setIsUserValid(true);
            // } else {
            //     setIsUserValid(false);
            // }
        };
        const validatePwd = (e: string) => {
            // 实时跟踪info的值
            setInfo({...info, password: e});
        };

        type NavProps = NavigationProp<RootStackParamList, 'Login'>;
        const navigation = useNavigation<NavProps>();
        /**
         * @Desc:登录事件处理：doLogin
         *
         * */

        const doLogin = async () => {
            try {
                const {password, username} = info;
                if (!username && !password) {
                    Alert.alert('提醒', '请输入用户名和密码', [{
                        text: '确定', onPress: () => {
                        }
                    }]);
                    return;
                }
                if (!password) {
                    Alert.alert('提醒', '请输入密码', [{
                        text: '确定', onPress: () => {
                        }
                    }]);
                    return;
                }
                if (!username) {
                    Alert.alert('提醒', '请输入用户名', [{
                        text: '确定', onPress: () => {
                        }
                    }]);
                    return;
                }
                if (username && username.length < 2 || password && password.length < 2) {
                    Alert.alert('提醒', '用户名和密码长度不能小于2位', [{
                        text: '确定', onPress: () => {
                        }
                    }]);
                } else {
                    // const res = await loginAPI({username, password});
                    // console.log('res===', res.data);
                    // Alert.alert('提醒', '获取数据', [{
                    //     text: '确定', onPress: () => {
                    //     }
                    // }]);
                    dispatch(LOGIN_SUCCESS(true));// 登录成功，修改isLogin为true
                    // 跳转到主页
                    navigation.navigate('Main');

                }
            } catch (e) {
                console.log('login e===', e);
            }

        };

        /**
         * @Desc:注册点击事件处理：doRegister
         *
         * */
        const doRegister = () => {
            // 跳转到注册页
            navigation.navigate('Register');
        };
        /**
         * @Desc；重置功能resetForm()
         *
         * */
        const resetForm = () => {
            setInfo({...info, username: '', password: ''});
            userRef.current?.clear();
            pwdRef.current?.clear();
        };

        return (
            <View style={{flex: 1}}>
                {/*登录页图片背景，backgroundSize:cover或contain，也可以是百分比或具体尺寸*/}
                <ImageBackground
                    source={require('@/assets/images/img03.jpg')}
                    resizeMode={'cover'}
                    style={styles.imgBg}>
                    {/*欢迎文本：Welcome!*/}
                    <View style={styles.welText}>
                        <Text style={styles.text}>Welcome!</Text>
                    </View>
                    <Animatable.View animation={'fadeInUpBig'} style={styles.footer}>
                        {/*登录表单*/}
                        {/*Bug修复；必须给ScrollView添加该属性，否则其内部嵌入的TouchOpacity无法提交；参考：
                    https://juejin.cn/post/6844903697558798350 'handled', the keyboard will not dismiss
                    automatically when the tap was handled by a children, (or captured by an ancestor).*/}
                        <ScrollView keyboardShouldPersistTaps={'handled'}>
                            {/*用户名框布局和控制*/}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Ionicons name={'person-outline'} color={'#666'} size={18}
                                          style={styles.insertLeftIcon}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'用户名'}
                                    placeholderTextColor={'#666'}
                                    onChangeText={(e) => validateUser(e)}
                                    ref={userRef}
                                    value={info.username}
                                />
                                {/*注：isUserValid布尔变量、叠加用户名或密码的长度，使得当输入框没有输入内容时，不提示警告*/}
                                {
                                    isUserValid && info.username.length ?
                                        <Animatable.View animation={'bounceIn'} style={styles.check}>
                                            <Ionicons name={'checkmark-circle-outline'} color={'#666'} size={20}/>
                                        </Animatable.View> : null
                                }
                            </View>
                            {/*用户名输入长度校验，长度大于等于2合法*/}
                            <View style={styles.validText}>{isUserValid ? <Text/> : <Text>
                                <Text style={{color: 'red', fontSize: 12}}>用户名长度不能小于2</Text>
                            </Text>}</View>
                            {/*flex 布局；从左到右，行排列；所有才有left:0，就可以实现内嵌图标*/}
                            {/*密码框布局和控制*/}
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Ionicons name={'lock-closed-outline'} color={'#666'} size={18}
                                          style={styles.insertLeftIcon}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'密码'}
                                    placeholderTextColor={'#666'}
                                    onChangeText={(e) => validatePwd(e)}
                                    secureTextEntry={textSecure}
                                    ref={pwdRef}
                                    value={info.password}

                                />
                                {
                                    isPwdValid && info.password.length ?
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                            onPress={() => {
                                                setTextSecure(!textSecure);
                                                console.log('showRef.current===', showRef.current);
                                            }}>
                                            <Animatable.View animation={'bounceIn'} style={styles.check} ref={showRef}>
                                                {
                                                    textSecure ? <Ionicons name={'eye-outline'} color={'#666'} size={20}/> :
                                                        <Ionicons name={'eye-off-outline'} color={'#666'} size={20}/>

                                                }
                                            </Animatable.View>
                                        </TouchableOpacity>
                                        :
                                        null
                                }
                            </View>
                            {/*密码长度校验提醒文字*/}
                            <View style={styles.validText}>
                                {isPwdValid ? <Text/> :
                                    <Text><Text style={{color: 'red', fontSize: 12}}>密码长度不能小于6</Text></Text>}
                                <TouchableOpacity style={{width: 30}} onPress={resetForm}>
                                    <View style={styles.reset}>
                                        < Text style={{
                                            fontSize: 12,
                                            color: '#2196f3',
                                        }}>重置</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.btn}
                                              onPress={doLogin}>
                                <Text style={{
                                    color: '#eeeeee'
                                }}>登录</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.btn, {backgroundColor: '#fff', borderWidth: 1, borderColor: '#2196f3'}]}
                                onPress={doRegister}>
                                <Text style={{color: '#2196f3'}}>注册</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </Animatable.View>
                </ImageBackground>

            </View>
        );
    }
;
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: '#2196f3',
        borderRadius: 10,
        flexDirection: 'row',
        height: 36,
        justifyContent: 'center',
        marginBottom: 8,
        width: '100%',
    },
    check: {// 校验输入的用户名长度>=2，以及密码长度>=6，则显示一个对勾
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        textAlign: 'center',
        width: 30,
        zIndex: 9999,

    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 3,// 占据高度的3/4
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    imgBg: {
        height: WINDOW_HEIGHT - STATUS_BAR_HEIGHT,
        width: '100%'
    },
    input: {
        backgroundColor: '#eee',
        borderRadius: 10,
        color: 'black',
        flex: 1,
        height: 40,
        paddingLeft: 25,
    },
    insertLeftIcon: {
        left: 0,
        marginRight: 5,
        position: 'absolute',
        width: 20,
        zIndex: 9999
    },
    reset: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    validText: {
        alignItems: 'center',
        // backgroundColor: 'green',
        color: 'red',
        flexDirection: 'row',
        fontSize: 12,
        height: 24,
        justifyContent: 'space-between',
        paddingLeft: 25, // 图标宽度 20+marginRight 5 =25

    },
    welText: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: Platform.OS === 'ios' ? 150 : 100
    }
});
export default LoginScreen;
