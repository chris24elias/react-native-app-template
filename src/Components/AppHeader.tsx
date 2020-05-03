import React from 'react';
import {View, ViewStyle, TextStyle, Platform} from 'react-native';
import {TopNavigation, Text, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {BackIcon} from './Icons';
import {Header} from 'react-native-elements';
import {SCREEN_HEIGHT} from '../Constants';
import Icon from './Common/Icon';

interface AppHeaderProps {
  title: string;
  showLeft?: boolean;
  leftControl?: any;
  rightControls?: any;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  leftIconColor?: string;
  showDrawerMenu?: boolean;
}

const AppHeader = ({
  title,
  showLeft = false,
  rightControls,
  containerStyle,
  titleStyle = {color: 'black'},
  leftIconColor = 'black',
  leftControl,
  showDrawerMenu = false,
}: AppHeaderProps) => {
  const navigation = useNavigation();

  const renderLeft = () => {
    if (leftControl) {
      return leftControl;
    } else if (showLeft) {
      return renderBackButton();
    } else if (showDrawerMenu) return renderDrawerMenuButton();
    else {
      return null;
    }
  };

  const renderDrawerMenuButton = () => {
    return (
      <TouchableOpacity style={{}} onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu-outline"
          fill="black"
          style={{paddingHorizontal: 10}}
        />
      </TouchableOpacity>
    );
  };

  const renderBackButton = () => {
    return showLeft ? (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon fill={leftIconColor} />
      </TouchableOpacity>
    ) : null;
  };

  const renderTitle = () => {
    return (
      <Text
        style={[
          {
            fontWeight: '600',
            lineHeight: 24,
            textAlign: 'left',
            fontSize: 15,
          },
          titleStyle,
        ]}>
        {title}
      </Text>
    );
  };

  const renderRight = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {rightControls
          ? rightControls.map((ctrl, index) => {
              return (
                <View key={index} style={{marginLeft: 7}}>
                  {ctrl}
                </View>
              );
            })
          : null}
      </View>
    );
  };

  return (
    // <SafeAreaView forceInset={{ top: "always", bottom: "never" }}>

    <Header
      backgroundColor="transparent"
      containerStyle={[
        {
          borderBottomWidth: 3,
          minHeight: Platform.OS == 'ios' ? 100 : 0,
          paddingHorizontal: 15,
        },
        Platform.OS == 'android'
          ? {
              paddingTop: 0,
              height: SCREEN_HEIGHT * 0.1,
            }
          : {},
        containerStyle,
      ]}
      leftComponent={renderLeft()}
      centerComponent={renderTitle()}
      rightComponent={renderRight()}
      placement={showLeft ? 'left' : 'center'}
    />
    // </SafeAreaView>
  );
};

export default AppHeader;
