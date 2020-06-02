import {Platform, Dimensions} from 'react-native';
export const isAndroid = Platform.OS === 'android' ? true : false;
export const isIos = !isAndroid;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const APP_STATE = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  AUTH: 'AUTH',
  UNKNOWN: 'UNKNOWN',
};
export const STATUS = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};
export const LOCALES = {
  ENGLISH: {id: 1, name: 'en', label: 'ENGLISH'},
  HINDI: {id: 2, name: 'hi', label: 'हिंदी'},
};
