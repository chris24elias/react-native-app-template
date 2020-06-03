import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabConfig,
} from '@gorhom/animated-tabbar';
import HomeSVG from './TabIcons/HomeSVG';
import ProfileSVG from './TabIcons/ProfileSVG';
import HomeScreen from '../Screens/Home';
import LikeSVG from './TabIcons/LikesSVG';
import SearchSVG from './TabIcons/SearchSVG';
import Routes from './Routes';
import {SCREEN_HEIGHT} from '../Constants';
import Colors from '../Constants/Colors';
import PeopleSVG from './TabIcons/PeopleSVG';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

const tabs: TabsConfig<BubbleTabConfig> = {
  [Routes.HOME_SCREEN]: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },

  [Routes.SETTINGS_SCREEN]: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

export default () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar
          style={{
            height: SCREEN_HEIGHT * 0.11,
            // backgroundColor: Colors.secondary,
          }}
          iconSize={20}
          duration={750}
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={Routes.SETTINGS_SCREEN} component={Settings} />
    </Tab.Navigator>
  );
};
