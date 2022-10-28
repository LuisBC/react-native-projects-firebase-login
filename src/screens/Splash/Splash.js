import React, { useContext } from 'react';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '@store/auth-context';
import CompanyLogo from '@components/CompanyLogo';

import styles from './Style';

const Splash = () => {
  const { finishSplashAnimation } = useContext(AuthContext);

  return (
    <Animatable.View
      animation="zoomOut"
      delay={2000}
      duration={1400}
      style={styles.container}
      onAnimationEnd={finishSplashAnimation}>
      <CompanyLogo />
    </Animatable.View>
  );
};

export default Splash;
