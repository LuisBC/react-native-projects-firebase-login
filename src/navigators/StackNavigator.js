import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Config from 'react-native-config';

import { AuthContext } from '@store/auth-context';
import { boldFamily } from '@constants/fonts';

import HeaderIcon from '@components/HeaderIcon';
import HeaderLogo from '@components/HeaderLogo';

import HomeScreen from '@screens/Home';
import SignInScreen from '@screens/SignIn';
import SplashScreen from '@screens/Splash';

const StackNavigator = state => {
  const Stack = createStackNavigator();
  const { authState } = useContext(AuthContext);

  if (authState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: boldFamily,
          fontSize: 21,
          color: '#383838',
        },
        headerBackTitleVisible: false,
        headerBackImage: () => <HeaderIcon nameIcon="arrow-left" leftIcon />,
      }}>
      {authState.userToken === null ? (
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            animationTypeForReplace: authState.isSignout ? 'pop' : 'push',
            header: () => {},
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: Config.COMPANY_NAME,
              headerLeft: () => <HeaderLogo />,
              headerRight: () => <HeaderIcon nameIcon="user-plus" />,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
