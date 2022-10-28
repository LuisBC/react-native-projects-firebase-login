import { StyleSheet } from 'react-native';
import { titleFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 170,
  },
  name: {
    fontFamily: titleFamily,
    fontSize: 25,
    lineHeight: 30,
  },
});

export default styles;
