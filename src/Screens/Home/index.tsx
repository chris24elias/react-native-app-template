import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Layout} from '@ui-kitten/components';
import AppHeader from '../../Components/AppHeader';
import {useStoreState, useStoreActions} from '../../Store';
import {Button, Text} from '../../Components/Common';
import useTheme from '../../Theme';
import useAuth from '../../Auth';
import TextInput from '../../Components/Form/TextInput';
import CounterComponent from './CounterComponent';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <Layout style={{flex: 1}}>
      <AppHeader title="Home" />

      <CounterComponent />
    </Layout>
  );
};

export default HomeScreen;
