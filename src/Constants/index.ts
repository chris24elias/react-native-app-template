import {Platform, Dimensions} from 'react-native';
export const isAndroid = Platform.OS === 'android' ? true : false;
export const isIos = !isAndroid;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
