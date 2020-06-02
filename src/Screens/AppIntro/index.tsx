import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Button} from '../../Components/Common';
import Routes from '../../Navigation/Routes';
import useTranslation from '../../i18n';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
  {
    key: '1',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    colors: ['#DBE6F6', '#C5796D'],
  },
  {
    key: '2',
    title: 'Title 2',
    text: 'Other cool stuff',
    colors: ['#F3904F', '#3B4371'],
  },
  {
    key: '3',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    colors: ['#A770EF', '#CF8BF3', '#FDB99B'],
  },
];

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const AppIntro = ({navigation, route}: Props) => {
  const {t, localeProvider, changeLocale} = useTranslation();

  const _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <LinearGradient colors={item.colors} style={styles.linearGradient}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </LinearGradient>
      </View>

      // <View style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      //   <Image source={item.image} />
      //   <Text style={styles.text}>{item.text}</Text>
      // </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    navigation.navigate(Routes.LOGIN_SCREEN);
  };

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{t('welcome')}</Text>
      <Text>Some AppIntro here</Text>
      <Button
        text="Navigate to Login"
        onPress={() => navigation.navigate(Routes.LOGIN_SCREEN)}
      />
    </Layout>
  );
};

export default AppIntro;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
