import {StyleSheet} from 'react-native';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowSpread: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },
});

export default viewStyles;
