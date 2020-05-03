import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

let bootSplashLogo = require('../../assets/bootsplash_logo.png');

const SplashScreen = ({onLoad}) => {
  let [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  let [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  let opacity = useRef(new Animated.Value(1));
  let translateY = useRef(new Animated.Value(0));

  let init = async () => {
    BootSplash.hide();

    if (onLoad) {
      await onLoad();
    }

    let useNativeDriver = true;

    Animated.stagger(250, [
      Animated.spring(translateY.current, {useNativeDriver, toValue: -50}),
      Animated.spring(translateY.current, {
        useNativeDriver,
        toValue: Dimensions.get('window').height,
      }),
    ]).start();

    Animated.timing(opacity.current, {
      useNativeDriver,
      toValue: 0,
      duration: 150,
      delay: 350,
    }).start(() => {
      setBootSplashIsVisible(false);
    });
  };

  useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  if (bootSplashIsVisible) {
    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          styles.bootsplash,
          {opacity: opacity.current},
        ]}>
        <Animated.Image
          source={bootSplashLogo}
          fadeDuration={0}
          onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
          style={[styles.logo, {transform: [{translateY: translateY.current}]}]}
        />
      </Animated.View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    zIndex: 10000,
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export default SplashScreen;
