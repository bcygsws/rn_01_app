import {Dimensions, NativeModules, Platform, StatusBar} from 'react-native';

/**
 * @Desc；定义各种高度变量
 *
 * */

const {StatusBarManager} = NativeModules;
const WINDOW_DIMENSIONS = Dimensions.get('window');
const {width, height} = WINDOW_DIMENSIONS;
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : StatusBarManager.height;
export const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
