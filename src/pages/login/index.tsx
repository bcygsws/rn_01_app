/**
 * @Desc；登录页
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
    TouchableOpacity,
} from 'react-native';
import * as Animatale from 'react-native-animatable';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT} from '@/utils/height.tsx';
import {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';

const LoginScreen = () => {
        // 当前输入的账号信息：info
        const [info, setInfo] = useState({username: '', password: ''});
        // 输入的用户名或者密码是否有效
        const [isUserValid, setIsUserValid] = useState(false);
        const [isPwdValid, setIsPwdValid] = useState(false);
        // 控制是否隐藏密码
        const [textSecure, setTextSecure] = useState(true);
        // 控制密码的显示或者隐藏
        const showRef = useRef<Animatale.View>(null);
        // 监听账号和密码框是否获得焦点
        const userRef = useRef<TextInput>(null);
        const pwdRef = useRef<TextInput>(null);
        // 操作时，传递的参数e，就是用户名或密码本身了
        useEffect(() => {
            info.username.length >= 2 ? setIsUserValid(true) :
                (info.username.length > 0 ? setIsUserValid(false) : setIsUserValid(true));
            info.password.length >= 2 ? setIsPwdValid(true) :
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

        const doLogin = () => {
            // 跳转到主页
            navigation.navigate('Main');
        };

        /**
         * @Desc:注册点击事件处理：doRegister
         *
         * */
        const doRegister = () => {
            // 跳转到注册页
            navigation.navigate('Register');
        };

        return (
            <View style={{flex: 1}}>
                {/*登录页图片背景*/}
                <ImageBackground
                    source={require('@/assets/images/img03.jpg')}
                    resizeMode={'cover'}
                    style={styles.imgBg}>
                    {/*欢迎文本：Welcome!*/}
                    <View style={styles.welText}>
                        <Text style={styles.text}>Welcome!</Text>
                    </View>
                    <Animatale.View animation={'fadeInUpBig'} style={styles.footer}>
                        {/*登录表单*/}
                        {/*Bug修复；必须给ScrollView添加该属性，否则其内部嵌入的TouchOpacity无法提交；参考：
                    https://juejin.cn/post/6844903697558798350*/}
                        <ScrollView keyboardShouldPersistTaps={'handled'}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Ionicons name={'person-outline'} color={'#666'} size={18}
                                          style={{width: 20, marginRight: 5}}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'用户名'}
                                    placeholderTextColor={'#666'}
                                    onChangeText={(e) => validateUser(e)}
                                    ref={userRef}
                                    value={info.username}
                                />
                                {
                                    isUserValid && info.username.length ?
                                        <Animatale.View animation={'bounceIn'} style={styles.check}>
                                            <Ionicons name={'checkmark-circle-outline'} color={'#666'} size={20}/>
                                        </Animatale.View> : null
                                }
                            </View>
                            {isUserValid ? <View style={styles.validText}><Text/></View> :
                                <View style={styles.validText}><Text
                                    style={{color: 'red', fontSize: 12}}>用户名长度不能小于2</Text></View>}
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Ionicons name={'lock-closed-outline'} color={'#666'} size={18} style={{marginRight: 5}}/>
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
                                            <Animatale.View animation={'bounceIn'} style={styles.check} ref={showRef}>
                                                {
                                                    textSecure ? <Ionicons name={'eye-outline'} color={'#666'} size={20}/> :
                                                        <Ionicons name={'eye-off-outline'} color={'#666'} size={20}/>

                                                }
                                            </Animatale.View>
                                        </TouchableOpacity>
                                        :
                                        null
                                }
                            </View>
                            {isPwdValid ?
                                <View style={styles.validText}><Text/>
                                    <TouchableOpacity style={{width: 36}} onPress={() => {
                                        setInfo({...info, username: '', password: ''});
                                        userRef.current?.blur();
                                        pwdRef.current?.blur();
                                    }}>
                                        <View style={{
                                            height: 20,
                                        }}>
                                            < Text style={{flex: 1, fontSize: 12, color: '#2196f3'}}>Reset</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> :
                                <View style={styles.validText}>
                                    <Text
                                        style={{color: 'red', fontSize: 12}}>密码长度不能小于2</Text>
                                    {/*重置表单*/}
                                    <TouchableOpacity style={{width: 30}} onPress={() => {
                                        setInfo({...info, username: '', password: ''});
                                    }}>
                                        <View style={{
                                            height: 20,
                                        }}>
                                            < Text style={{flex: 1, fontSize: 12, color: '#2196f3'}}>重置</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            }

                            <TouchableOpacity style={styles.btn}
                                              onPress={doLogin}>
                                <Text style={{
                                    color: '#eeeeee',
                                }}>登录</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, {backgroundColor: '#cccccc'}]}
                                              onPress={doRegister}>
                                <Text style={{color: '#2196f3'}}>注册</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </Animatale.View>
                </ImageBackground>

            </View>
        );
    }
;
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: '#2196f3',
        flexDirection: 'row',
        height: 36,
        justifyContent: 'center',
        marginBottom: 10,
        width: '100%',
    },
    check: {// 校验输入的用户名或者密码长度大于2，则显示一个对勾
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        textAlign: 'center',
        width: 30,
        zIndex: 99999999,

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
        color: 'black',
        flex: 1,
        height: 40,
        position: 'relative',
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
