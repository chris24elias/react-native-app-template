import React from 'react';
import {
  Button as KittenButton,
  ButtonProps as KittenButtonProps,
  Text,
} from '@ui-kitten/components';
import {TextStyle} from 'react-native';
import useTheme from '../../Theme';

interface ButtonProps extends KittenButtonProps {
  text: string;
  textStyle?: TextStyle;
}

const Button = ({
  text,
  textStyle,
  style,
  children,
  ...otherProps
}: ButtonProps) => {
  const {theme} = useTheme();

  return (
    <KittenButton
      style={[
        {backgroundColor: theme.Primary.main, borderColor: theme.Primary.main},
        style,
      ]}
      activeOpacity={0.2}
      {...otherProps}>
      {(evaProps) => (
        <Text {...evaProps} style={[evaProps.style, textStyle]}>
          {text}
        </Text>
      )}
    </KittenButton>
  );
};

export default Button;
