import React from 'react';
import { Image } from 'react-native';

import { logo } from '@constants/images';

import styles from './Style';

const HeaderImage = () => {
  return <Image style={styles.image} source={logo} />;
};

export default HeaderImage;
