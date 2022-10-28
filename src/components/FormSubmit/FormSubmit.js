import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './Style';

const FormInput = props => {
  const { colors } = useTheme();

  return (
    <View style={props.submitContainerStyle}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors.primary,
          },
        ]}
        {...props}>
        <Text style={styles.textButton}>{props.textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormInput;
