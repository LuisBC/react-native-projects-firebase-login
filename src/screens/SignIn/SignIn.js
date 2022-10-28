import React, { useContext } from 'react';
import { View, StatusBar, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AuthContext } from '@store/auth-context';
import CompanyLogo from '@components/CompanyLogo';

import Fingerprint from './components/Fingerprint';
import Form from './components/Form';
import styles from './Style';

const SignIn = () => {
  const { colors } = useTheme();
  const { signIn } = useContext(AuthContext);

  const handleAuthFingerprint = async () => {
    try {
      await signIn();
    } catch (e) {
      console.log(e);
      Alert.alert(e);
    }
  };

  const handleSubmit = async ({ email, password }) => {
    try {
      await signIn(email, password);
    } catch (e) {
      console.log(e);
      Alert.alert(e);
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        keyboardShouldPersistTaps="always">
        <StatusBar
          backgroundColor={colors.background}
          barStyle="dark-content"
        />
        <View style={styles.companyLogoContainer}>
          <CompanyLogo />
        </View>
        <View style={styles.formContainer}>
          <Form onSubmit={handleSubmit} />
        </View>
        <View style={styles.fingerprintContainer}>
          <Fingerprint
            onAuthenticate={handleAuthFingerprint}
            textButton="Log in with scanner"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
