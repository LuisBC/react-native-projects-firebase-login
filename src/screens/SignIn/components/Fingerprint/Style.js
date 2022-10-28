import { StyleSheet } from 'react-native';
import { boldFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontFamily: boldFamily,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
