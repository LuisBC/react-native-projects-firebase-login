import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './Style';

const FormError = props => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.errorText, { color: colors.errorText }]}>
      {props.text}
    </Text>
  );
};

export default FormError;
