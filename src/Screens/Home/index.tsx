import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, Text} from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
