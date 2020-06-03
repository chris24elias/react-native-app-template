import React from 'react';
import {TextInputProps, Text, View, TouchableOpacity} from 'react-native';
import {Input, Icon} from '@ui-kitten/components';
import styles from './styles';
import get from 'lodash/get';

interface InputProps extends TextInputProps {
  name: string;
  title?: string;
  secure?: boolean;
  placeholder?: string;
  returnKeyLabel?: any;
  multiline?: boolean;
}

const TextInput = React.forwardRef(
  (
    {
      name,
      title,
      secure,
      error,
      placeholder,
      multiline,
      returnKeyLabel,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(secure);

    const renderIcon = (style) => (
      <TouchableOpacity onPress={onIconPress}>
        <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />
      </TouchableOpacity>
    );

    const onIconPress = () => {
      setSecureTextEntry(!secureTextEntry);
    };
    return (
      <View style={styles.fieldContainer}>
        <Input
          ref={ref}
          placeholder={placeholder}
          //   value={value}
          //   onChangeText={text => {
          //     let txt = text;
          //     if (formatText) {
          //       txt = formatText(text);
          //     }
          //     setValue(txt);
          //   }}
          style={{}}
          label={title}
          //   status={error ? 'danger' : value ? 'success' : 'basic'}
          caption={error ? (error.message ? error.message : 'Error') : ''}
          // returnKeyLabel={""}
          returnKeyType={
            !multiline && returnKeyLabel == 'Next'
              ? rest.keyboardType == 'numeric'
                ? 'done'
                : 'next'
              : 'default'
          }
          secureTextEntry={secureTextEntry}
          accessoryRight={secure ? renderIcon : null}
          multiline={multiline}
          autoCapitalize={secure ? 'none' : 'sentences'}
          {...rest}
        />
      </View>
    );
  },
);

export default TextInput;
