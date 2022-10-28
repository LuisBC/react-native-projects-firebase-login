import React from 'react';
import { View, Text, Image } from 'react-native';
import Config from 'react-native-config';
import { useTheme } from '@react-navigation/native';

import { logo } from '@constants/images';

import styles from './Style';

const CompanyLogo = props => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <Text
        style={[
          styles.name,
          {
            color: colors.primary,
          },
        ]}>
        {Config.COMPANY_NAME}
      </Text>
    </View>
  );
};

export default CompanyLogo;
