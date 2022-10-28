import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Style';

const Fingerprint = props => {
  const { colors } = useTheme();

  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    const checkSensor = async () => {
      FingerprintScanner.isSensorAvailable()
        .then(biometry => setBiometryType(biometry))
        .catch(error => console.log('isSensorAvailable error => ', error));
    };
    checkSensor();

    return () => {
      FingerprintScanner.release();
    };
  }, []);

  const getMessage = () => {
    if (biometryType === 'Face ID') {
      return 'Scan your face to continue';
    } else {
      return 'Scan your finger to continue';
    }
  };

  const showAuthenticationDialog = async () => {
    if (biometryType !== null && biometryType !== undefined) {
      try {
        await FingerprintScanner.authenticate({
          description: getMessage(),
          cancelButton: 'Cancel',
        });
        props.onAuthenticate();
      } catch (e) {
        console.log('Authentication error is => ', e);
      }
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <View style={props.fingerprintContainerStyle}>
      <TouchableOpacity
        style={styles.button}
        onPress={showAuthenticationDialog}>
        <Icon name="fingerprint" size={35} color={colors.primary} />
        <Text
          style={[
            styles.textButton,
            {
              color: colors.primary,
            },
          ]}>
          {props.textButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fingerprint;
