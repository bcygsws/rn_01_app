This is a new [**React Native**](https://reactnative.dev) project, bootstrapped
using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed
> the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the
following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native
deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please
visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your
connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update
and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>
  Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out
  the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out
  the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see
the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your
  environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for
  React Native.

# 项目构建方式一：使用@react-native-community/cli脚手架

## 构建过程

- 创建项目：npx @react-native-community/cli init myApp_01

## 相关gradle的基本配置

- 路径gradle/wrapper/gradle-wrapper.properties中的distributedUrl切换完本地下载好的gradle.
- 在项目目录android/local.properties文件，添加如下内容：sdk.dir=E:/android-studio/SDK，以声明环境变量中的ANDROID_HOME的值
-

在项目目录android/build.properties中修改buildToolsVersion、compileSdkVersion、minSdkVersion（最小24）、targetSdkVersion为相应的值；同时为repositories添加
阿里云镜像

- allprojects {
  repositories {
  maven { url 'https://maven.aliyun.com/repository/google' }
  maven { url 'https://maven.aliyun.com/repository/jcenter' }
  maven { url 'https://maven.aliyun.com/repository/public' }
  }
  }

- 以上，运行npm run android命令，即可在手机上运行项目

## 其他配置

- 在android/gradle.properties中添加如下内容：
- # add myself;to solve the problem:app start,but can't find path
- # at old version,it is com.android.build.gradle.overridePathCheck=true
- android.overridePathCheck=true

## 三、安装apk前的准备

### 3.1 真机连接到电脑

- 用一条USB线连接电脑和手机
- 打开usb调试；开启【开发者选项】、【USB调试】、【USB安装】

### 3.2 adb的概念和命令

#### 什么是adb

- [什么是adb](https://developer.baidu.com/article/details/3305955)
- adb是Android Debug Bridge的简称，是一个用于调试Android手机的命令行工具，它提供了一些命令，用于管理模拟器、连接手机、安装、卸载、调试应用程序等操作
- adb的工作原理：adb有三部分组成，分别为客户端、服务器和守护进程（daemon）；当开发者使用命令行终端运行adb命令时，客户端会将命令发送给服务端，服务端将命令转发
  相应的守护进程，守护进程在设备上运行，执行结果返回给服务端；服务端再将结果转发给客户端，最终显示在命令行终端上
- adb devices 查看手机连接的情况，adb默认端口是5037端口，如果端口被占用，则需要查看端口占用情况，释放该端口
    - 查找该端口下的任务id：task_id，使用命令：netstat -ano|findstr 5037
    - 查看任务id所在的进程id，process_id;使用命令：tasklist |findstr task_id
    - 杀掉该进程：taskkill /f /pid process_id
    - [杀死5037端口占用的命令](https://www.cnblogs.com/testhub/p/6284091.html)

- 切换到SDK安装目录下，E:\android-studio\SDK\platform-tools,执行以下命令：
    - add kill-server
    - add start-server
    - add reverse tcp:5037 tcp:5037，将5037端口映射到5037端口

### 3.3 其他配合调试的命令

- npx react-native doctor，命令可以辅助我们检查项目出现的一些问题

### 3.3 启动项目

- npx react-native run-android 或者npm run android 启动项目

## 入门教程

- [入门教程](https://juejin.cn/post/7310786611258966067?searchId=202504100702336ADD8D891F777D0A887B)

# 项目构建方式二：使用create-expo-app

## 构建过程

- npx create-expo-app@latest myApp_02

## 查看模拟器设备运行情况

- adb devices
- adb kill-server
- adb start-server
- adb revise tcp:5037 tcp:5037

## 启动项目

- 切换到根目录下，执行npm run android或者npx expo start --android

# 四、RN中的样式的特殊之处

- RN中的样式没有继承性
    - RN中样式的继承只发生在Text组件中
- 样式的键使用驼峰命名法
- 所有尺寸都没有单位
    - width:100
- 有些特殊的样式名,css中是没有的
    - marginHorizontal和marginVertical

## 4.1 RN中样式的声明

- style={{k1:v1,k2:v2}},外层是js语法，内存是样式对象
- style={[{k1:v1},{k2:v2}]}外层大括号是js语法，内存是样式数组；后面的如果与前面的样式有重复的键，后面的会覆盖前面的
- 在RN中，使用StyleSheet.create()创建样式对象
    - const styles=StyleSheet.create(
    - {
    - container:{
    -       width:100,
    -       backgroundColor:'red'
    - }
    - }
      )

## 遇到Bug

### 如遇到unable to load script.Make sure you're either running a metro server……

- 解决办法[参考文档](https://blog.csdn.net/augfun/article/details/106679110)
- 在android/main下创建一个assets文件夹
- 执行以下命令：npx react-native bundle --platform android --dev false --entry-file index.js
  --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest
  android/app/src/main/res
- 然后，注意查看自己项目是否有 index.android.js这个文件，如果有回车执行命令即可，否则会会报错，
  找不到这个index.android.js文件；把index.android.js改为index.js
- 在项目中执行npm run android 或者npx react-native run-android，打包、安装apk应用到真机或者模拟器

# 五、RN项目中构建APP应用程序

## 5.1 路由与导航

### 5.1.1 简介

- RN中使用路由，需要使用React-Navigation,react中使用react-router来实现路由
- 注：在0.44版本之前，react-navigation在核心之中维护的，在这之后的版本，单独维护

### 5.1.2 基础组件

#### 安装

- 安装核心功能 npm install --save @react-navigation/native --save
- 其他必要的依赖：npm install react-native-reanimated(动画增强) react-native-gesture-handler（手势处理,react-navigation
  7版本不需要了）
  react-native-screens（屏幕处理组件）
  react-native-safe-area-context（处理刘海屏的问题） @react-native-community/masked-view --save

#### 链接

- RN 0.60 版本之后，自动链接路由；android无需任何操作
- ios下需手动链接路由（执行一个命令npx pod-install ios）

#### 添加头部组件

- 在App.js或者App.tsx或者index.js等入口文件最顶部添加
  import 'react-native-gesture-handler';

#### 添加导航容器

- 在App.js或者App.tsx或者index.js等入口文件，把整个应用包裹在NavigationContainer中（例如：App.js或者index.js中）
- 示例代码
  import 'react-native-gesture-handler';
  import * as React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  export default function App() {
  return (<NavigationContainer>{/*具体的应用代码*/}</NavigationContainer>)
  }
- 注：[React-Navigation中文网](https://react-navigation.nodejs.cn/docs/getting-started)
- 注：[React Native Express](https://www.reactnative.express/)
- 注：[expo-跨平台的app构建系统](expo.io)

### 5.1.3 Stack导航

#### 一、Stack导航器

- 安装的是@react-navigation/stack，虽然使用stack导航是高度可定制的，但它是使用JavaScript实现的，性能远不如
  原生的stack导航器，所以，在性能要求高的项目中，建议考虑@react-navigation/native-stack

#### 二、创建原生堆栈导航器

- RN中没有类似浏览器中的history对象
- 在RN跳转之前，需要将路由声明在Stack中
- React Navigation 5版本安装：npm install --save @react-navigation/stack
- React Navigation 7版本安装native-stack：npm install @react-navigation/native-stack

- [参考文档](https://react-navigation.nodejs.cn/docs/hello-react-navigation?config=dynamic)

### 5.1.4 BottomTab导航

- 安装依赖包：npm install --save @react-navigation/bottom-tabs
- 用法类似原生栈导航器

#### BottomTab的图标

- 安装包(包文件和类型声明)
  npm install --save react-native-vector-icons@10
  npm install --save @types/react-native-vector-icons
- 将图标链接到应用（环境问题较多）；[矢量图库官网](https://github.com/oblador/react-native-vector-icons)
- 将图标链接到应用（环境问题较多）；[旧版本矢量图库官网](https://github.com/oblador/react-native-vector-icons/tree/10.x)
- 使用：需要到具体的图标库查找使用；例如：Ionicons,Font Awesome(bootstrap用的默认图标库),Ant Design（蚂蚁金服推出）等等
- 一10.x版本：react-native-vector-icons为例；在旧版本矢量图库中，按照要求配置app/build.gradle文件；
  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

### 5.1.5 Drawer导航(抽屉导航)

#### 使用

- 安装依赖包：npm install --save @react-navigation/drawer
- const Drawer=createDrawerNavigator();
- 在使用Drawer导航时，需要使用Drawer.Navigator和Drawer.Screen

#### 配置Drawer Navigator

- 需要在babe.config.js中配置react-native-reanimated的插件，因为抽屉效果本身是一种动画操作；所以，需要增加
  plugins节点，配置为 plugins: ['react-native-reanimated/plugin']

#### 抽屉和抽屉选项的格式化属性

区别：版本变化的差异；Navigator的属性:7.x版本，下面的属性都放进Navigator的screenOptions属性下面了；5.x版本，drawerStyle单独就是Navigator的属性

- drawerPosition: 'left' | 'right',菜单显示位置
- drawerType:  'front' | 'back'|'slide' | 'permanent' 来规定抽屉弹出时，以何种方式影响主界面
- drawerStyle: 侧边栏样式
- width,backgroundColor,borderRightWidth,borderRightColor,borderRightStyle
- drawerContentOptions:抽屉整个内容区样式,在drawerStyle中设置，是等效的
- drawerActiveTintColor：选中菜单项字体颜色
- drawerInactiveTintColor：未选中时菜单项字体颜色
- drawerItemStyle：所有菜单样式

### 5.1.6 MaterialTopTab导航(左右导航)

##### 安装依赖

- npm i @react-navigation/material-top-tabs react-native-pager-view --save
- 注意：react-native-pager-view依赖包,必须安装；@react-navigation/material-top-tabs依赖该包
- 注意1：react-native-tab-view依赖包，可以不安装；它是在没有react navigation下可以单独实现滑动切换功能；
  项目优化时，视具体需求，可以卸载掉该插件

#### 使用

- const Tab= createMaterialTopTabNavigator();
- 然后使用Tab.Navigator和Tab.Screen

#### 格式化属性

##### navigator属性

- tabBarPosition: 'top' | 'bottom',菜单显示位置,顶部或者底部
- tabBarOptions: 顶部组件属性的对象
    - activeTintColor：选中菜单项字体颜色
    - inactiveTintColor：未选中时菜单项字体颜色
    - showIcon: true | false,是否显示图标
    - showLabel: true | false,是否显示文字提示
    - tabStyle: tab标签样式对象
    - labelStyle: 顶部组件字体样式
    - indicatorStyle: 选中菜单项下划线样式
    - pressColor: 顶部组件按下颜色
    - pressOpacity: 顶部组件按下透明度
    - scrollEnabled: true | false,是否滚动
    - tabBarIndicatorStyle: 选中菜单项下划线样式
    - tabBarStyle: 顶部组件样式

##### screen属性

- options属性
    - title: 顶部组件标题
    - tabBarIcon: 顶部组件图标(需要在navigator中配置showIcon为true,这里的设置才会生效)
    - tabBarLabel: 顶部组件文字提示;当未定义该属性时，会默认使用title属性的值
        - 其值为函数，包含两个参数{focused:boolean,color:string}
        - focused:true,表示当前组件被选中，false表示当前组件未被选中
        - color:表示当前组件被选中时的颜色

## 5.2 RN中使用路由

- RN中使用路由，需要使用React-Navigation,react中使用react-router来实现路由
- 注：在0.44版本之前，react-navigation在核心之中维护的，在这之后的版本，单独维护

# 六、React Native架构

## 6.1 现有架构

### 6.1.1 React Native 旧架构简介

- React Native 旧架构：Native---Bridge---JS(React)
- 进入Bridge，JSON序列化；离开Bridge, JSON反序列化
    - Bridge包含：shadow tree 、JSON(Async异步的,不用等待)、Native modules
    - 注：json（JavaScript Object Notation,JavaScript对象表示法）是一种开放标准的文件格式和数据交换格式（一种数据交互语言）
    - Bridge的三个特点：序列化(Serialized)、异步（Async）、批处理（batched）
- React Native 架构

### 6.1.2 React Native旧架构的线程模型

- JS线程：作用-JS代码的执行线程，React代码通过Metro打包后，交由JS引擎来解析
- Main线程（UI线程或者原生线程）：作用-负责原生渲染（Native UI）和调用原生模块(Native Modules)；偏底层的，了解即可，不必深入
- Shadow线程(Layout线程)工作过程：
    - 创建shadow tree来模拟react结构树（类似虚拟DOM）
    - 再交由Yoga引擎将FlexBox等样式解析成原生平台的布局方式(Android和ios布局中是不支持FlexBox的，所以需要Yoga引擎来转换成对应的布局方式
    - JS线程--->Shadow线程--->Main线程

### 6.1.3 React Native旧架构的启动过程

- 启动过程

## 6.2 新架构

### 6.2.1 新架构三大改动

- JavaScript层：
    - 对react 16+版本新特性的支持；
    - 增强js类型检查：CodeGen
    - 引入JSI,允许替换不同的js引擎(例如：默认的JS Core,谷歌的V8,移动端Hermes等等)
- Bridge层：
    - 拆分成了fabric 和 TurboModules，分别负责原生渲染和调用原生模块
- Native层：
    - 精简核心模块，将非核心的模块拆分出去，作为社区模块，独立更新维护

# 七、其他组件

## 7.1 camera组件

- 安装：react-native-camera组件已经被弃用；官方解释
  We are looking for maintainers for this package, or to depreciate this in favor of react-native-vision-camera or
  expo-camera, if nobody want to maintain this package.使用更推荐的react-native-vision-camera;安装：npm install
  react-native-vision-camera --save
- 按照官方文档配置；[react-native-vision-camera官方文档](https://react-native-vision-camera.com/docs/guides/)

## 7.2 组件配置

- 申请权限：npm install react-native-vision-camera --save
- 获取相机设备
- 从应用程序状态判断相机活跃状态；npm install @react-native-community/hooks --save
- 获取节点相机拍照：npm install @react-native-camera-roll/camera-roll --save
  7.3 参考文档
- [React Native调用摄像头画面及拍照和保存图片(含base64保存图片)到相册全流程](https://juejin.cn/post/7338771486399905792)

## 7.2 本地数据持久化，类似web端的localStorage

- 安装： npm i @react-native-async-storage/async-storage --save
- 配置：重点
    - [官网文档](https://github.com/react-native-async-storage/async-storage?tab=readme-ov-file)
    - [使用](https://react-native-async-storage.github.io/async-storage/docs/install/)
- 在工具文件夹utils下，封装storage的增删改查方法

## 7.3 获取地理位置信息

- 安装：npm install @react-native-community/geolocation --save
-
配置：在AndroidManifest.xml中添加权限，下面两个权限配置，添加一个即可：[参考文档](https://github.com/michalchudziak/react-native-geolocation)
    - <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    - <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

# 八、申请和配置react native安卓打包证书

## [参考文档](https://blog.csdn.net/tianpeng1996/article/details/126704329)

## [打包证书](https://blog.csdn.net/xiediy/article/details/147790082)

# Bug Fix

## Bug1: react-native运行时无响应，按r出现No apps connected. Sending “reload“ to all React Native apps failed. Make sure

- npx react-native start --reset-cache
- cd android,切换到android目录下，执行./gradlew clean
- cd ..,切换到项目根目录下，执行npx react-native run-android
- [参考文档](https://huaweicloud.csdn.net/64f97d97993dd34278ee1674.html)

## Bug2:Unable to load script.Make sure you‘re either running a metro server（ run 'react-native start' ）

- [参考文档](https://blog.csdn.net/qq_35822665/article/details/146938780)




