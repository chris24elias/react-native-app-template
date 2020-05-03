import React from 'react';
import {Icon as KittenIcon, IconProps} from '@ui-kitten/components';
import {Icon as VectorIcon} from 'native-base';

interface Props extends IconProps {
  size?: number;
  name: string;
  type?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | undefined;
}

const Icon = ({name, size = 24, type, fill = '#000', ...otherProps}: Props) => {
  if (type) {
    return (
      <VectorIcon
        name={name}
        type={type}
        fontSize={size}
        style={{fontSize: size, color: fill}}
        {...otherProps}
      />
    );
  }

  return (
    <KittenIcon
      name={name}
      height={size}
      width={size}
      fill={fill}
      {...otherProps}
    />
  );
};

export default Icon;
