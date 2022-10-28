import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  leftIcon: {
    marginLeft: Platform.OS === 'ios' ? 15 : 5,
  },
  rightIcon: {
    marginRight: 15,
  },
});

export default styles;
