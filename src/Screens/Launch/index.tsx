import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import useTheme from '../../Theme';

export default function () {
  const {theme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.Primary.main} />
      <Text
        style={{
          color: theme.Primary.main,
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Give us a second...
      </Text>
    </View>
  );
}
