import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {Layout} from '@ui-kitten/components';
import AppHeader from '../../Components/AppHeader';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <Layout style={{flex: 1}}>
      <AppHeader title="Home" />
      <Text>HomeScreen</Text>
    </Layout>
  );
};

export default HomeScreen;
