import { StyleSheet } from 'react-native';
import { titleFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyLogo: {
    width: 150,
    height: 150,
  },
  companyName: {
    fontFamily: titleFamily,
    fontSize: 25,
    lineHeight: 30,
  },
});

export default styles;
