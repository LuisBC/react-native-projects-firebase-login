import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import { AuthContext } from '@store/auth-context';

import styles from './Style';

const Home = () => {
  const { signOut } = useContext(AuthContext);

  const handleLogOut = () => signOut();

  return (
    <View style={styles.container}>
      <Button title="LOGOUT" onPress={handleLogOut} />
    </View>
  );
};

export default Home;
