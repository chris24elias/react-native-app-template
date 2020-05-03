import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

// Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect(); // let's connect!

// ADVANCED

Reactotron.clear();

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'React Native Demo',
    createSocket: (path) => new ReactotronFlipper(path),
  })
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  }) // add all built-in react native plugins
  .use(reactotronRedux()) // plus some custom made plugin.
  .use(trackGlobalErrors())
  .connect();

export default reactotron;
