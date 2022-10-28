import { StyleSheet } from 'react-native';
import { semiBoldFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: semiBoldFamily,
    fontSize: 25,
  },
  inputContainer: {
    marginTop: 30,
  },
  submitContainer: {
    marginTop: 40,
  },
});

export default styles;
