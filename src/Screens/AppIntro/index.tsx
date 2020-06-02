import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Button} from '../../Components/Common';
import Routes from '../../Navigation/Routes';
import useTranslation from '../../i18n';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const AppIntro = ({navigation, route}: Props) => {
  const {t, localeProvider, changeLocale} = useTranslation();

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