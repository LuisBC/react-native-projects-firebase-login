import React, {
  useState,
  createContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import auth from '@react-native-firebase/auth';

import AuthService from '@services/Auth';

export const AuthContext = createContext({
  signIn: data => {},
  signOut: () => {},
  // signUp: () => {},
  authState: {
    isLoading: true,
    isSignout: false,
    userToken: null,
  },
  finishSplashAnimation: () => {},
});

const AuthContextProvider = props => {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    const authStateSubscriber = auth().onAuthStateChanged(async user => {
      const token = await user?.getIdToken();
      if (token) {
        AuthService.setAuth({ token });
        setAuthToken(token);
      }
    });
    return authStateSubscriber;
  }, []);

  useEffect(() => {
    if (isSplashFinished) {
      dispatch({ type: 'RESTORE_TOKEN', token: authToken });
    }
  }, [isSplashFinished, authToken]);

  const authContext = useMemo(
    () => ({
      signIn: async (email, password) => {
        if (email && password) {
          try {
            const { user } = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            const token = await user?.getIdToken();
            AuthService.setAuth({ token });
            dispatch({ type: 'SIGN_IN', token });
          } catch (error) {
            console.log(error);
            switch (error.code) {
              case 'auth/invalid-email':
                throw 'Invalid email';
              case 'auth/user-disabled':
                throw 'User disabled';
              case 'auth/user-not-found':
                throw 'Wrong email';
              case 'auth/wrong-password':
                throw 'Wrong password';
              case 'auth/too-many-requests':
                throw 'Too many requests. Try again later.';
              default:
                throw 'There was an error in sign in';
            }
          }
        } else {
          try {
            const { user } = await auth().signInAnonymously();
            const token = await user?.getIdToken();
            AuthService.setAuth({ token });
            dispatch({ type: 'SIGN_IN', token });
          } catch (error) {
            console.log(error);
            throw 'There was an error in sign in';
          }
        }
      },
      signOut: async () => {
        try {
          await auth().signOut();
          AuthService.purgeAuth();
          dispatch({ type: 'SIGN_OUT' });
        } catch (error) {
          console.log(error);
        }
      },
      // signUp: async data => {
      //   AuthService.setAuth({ token: 'dummy-auth-token' });
      //   dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      // },
      authState: state,
      finishSplashAnimation: () => setIsSplashFinished(true),
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
