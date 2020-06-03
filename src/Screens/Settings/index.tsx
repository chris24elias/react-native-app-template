import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import useTheme from '../../Theme';
import {Button} from '../../Components/Common';
import useAuth from '../../Auth';
import viewStyles from '../../Styles/ViewStyles';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Settings = ({navigation, route}: Props) => {
  const {theme, themes, setTheme} = useTheme();
  const {logout} = useAuth();
  return (
    <Layout style={{flex: 1}}>
      <AppHeader title="Settings" />
      <View style={{...viewStyles.container, padding: 10}}>
        <Text style={{marginBottom: 5, marginTop: 5}} category="h2">
          Themes
        </Text>

        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: theme.Primary.main,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text category="h5">Current Theme</Text>
        </View>
        <ScrollView
          style={{padding: 15}}
          keyboardShouldPersistTaps="handled"
          horizontal>
          {themes.map((thm) => {
            return (
              <TouchableOpacity key={thm.key} onPress={() => setTheme(thm.key)}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    margin: 5,
                    backgroundColor: thm.Primary.main,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Button
          text="LOGOUT"
          style={{marginBottom: 25}}
          onPress={() => logout()}
        />
      </View>
    </Layout>
  );
};

export default Settings;
