import React from 'react';
import {
  Button as KittenButton,
  ButtonProps as KittenButtonProps,
  Text,
} from '@ui-kitten/components';
import {TextStyle} from 'react-native';

interface ButtonProps extends KittenButtonProps {
  text: string;
  textStyle?: TextStyle;
}

const Button = ({text, textStyle, children, ...otherProps}: ButtonProps) => {
  return (
    <KittenButton {...otherProps}>
      {(evaProps) => (
        <Text {...evaProps} style={[evaProps.style, textStyle]}>
          {text}
        </Text>
      )}
    </KittenButton>
  );
};

export default Button;
