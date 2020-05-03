import React from 'react';
import {Text as KText, TextProps} from '@ui-kitten/components';

interface Props extends TextProps {
  text?: string;
  maxLength?: number;
  children?: any;
  category?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 's1'
    | 's2'
    | 'p1'
    | 'p2'
    | 'c1'
    | 'c2'
    | 'label';
  appearance?: 'default' | 'alternative' | 'hint';
}

const Text = ({children, text, maxLength, ...otherProps}: Props) => {
  const renderText = () => {
    let textToRender = text ? text : children;

    if (
      textToRender &&
      typeof textToRender == 'string' &&
      maxLength &&
      textToRender.length > maxLength
    ) {
      return textToRender.slice(0, maxLength - 3) + '...';
    }

    return textToRender;
  };
  return <KText {...otherProps}>{renderText()}</KText>;
};

export default Text;
