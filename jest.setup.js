import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const mockKeychain = {
  SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY',
  SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE',
  SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE',
  setGenericPassword: jest.fn().mockResolvedValue(),
  getGenericPassword: jest.fn().mockResolvedValue(),
  resetGenericPassword: jest.fn().mockResolvedValue(),
};

jest.mock('react-native-keychain', () => mockKeychain);

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

// const mockReactotron = {
//   configure: () => mockReactotron,
//   useReactNative: () => mockReactotron,
//   use: () => mockReactotron,
//   connect: () => mockReactotron,
//   clear: () => mockReactotron,
//   createEnhancer: () => mockReactotron,
//   clear: () => mockReactotron,
//   connect: () => mockReactotron,
//   setAsyncStorageHandler: () => mockReactotron,
//   createEnhancer: () => mockReactotron,
// };

// jest.mock('reactotron-react-native', () => mockReactotron);
