import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';

import styles from './Style';

const HeaderIcon = props => {
  const { colors } = useTheme();

  return (
    <Icon
      name={props.nameIcon}
      size={props.size || 22}
      color={props.color || colors.primary}
      style={props.leftIcon ? styles.leftIcon : styles.rightIcon}
      {...props}
    />
  );
};

export default HeaderIcon;
