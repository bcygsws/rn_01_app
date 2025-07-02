/**
 * @Desc:路由配置
 * 是一个大部分键值为undefined的对象 {key:val,key1:val2,...}
 * 带参数的路由，undefined替换成{参数变量:类型}
 * 例如：Detail:{url: string}
 * 
 *
 * */
export type RootStackParamList = {
    Main: undefined;
    Register: undefined;
    Login: undefined;
    Home: undefined;
    Detail: { url: string };
    News: undefined;
    NativeStack: undefined;
    Profile: undefined;
    Camera: undefined;
    Setting: undefined;
    About: undefined;
    Test: undefined;// 测试rn项目的redux状态管理方案
    Splash: undefined;


}

