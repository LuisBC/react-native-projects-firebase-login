import { StyleSheet } from 'react-native';
import { semiBoldFamily } from '@constants/fonts';

const styles = StyleSheet.create({
  label: {
    fontFamily: semiBoldFamily,
    fontSize: 16,
  },
  textInputContainer: {
    height: 55,
    width: '100%',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  textInputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    fontFamily: semiBoldFamily,
    padding: 0,
    height: '100%',
    flex: 1,
  },
  textInputPassword: {
    paddingRight: 15,
  },
});

export default styles;
