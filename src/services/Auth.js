import AsyncStorage from '@react-native-community/async-storage';

export const AUTH_KEY = 'auth';

const setAuth = async data => {
  await AsyncStorage.setItem(AUTH_KEY, JSON.stringify({ ...data }));
};

const getAuth = async () => {
  const auth = await AsyncStorage.getItem(AUTH_KEY);
  return auth ? JSON.parse(auth) : null;
};

const purgeAuth = async () => {
  await AsyncStorage.removeItem(AUTH_KEY);
};

export default { setAuth, getAuth, purgeAuth };
