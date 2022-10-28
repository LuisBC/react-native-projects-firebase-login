import { StyleSheet } from 'react-native';
import { boldFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontFamily: boldFamily,
    fontSize: 19,
  },
});

export default styles;
