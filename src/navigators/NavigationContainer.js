import React from 'react';
import { NavigationContainer as NavContainer } from '@react-navigation/native';
import StackNavigator from '@navigators/StackNavigator';

import CustomTheme from '@theme';

const NavigationContainer = props => {
  return (
    <NavContainer {...props} theme={CustomTheme}>
      <StackNavigator />
    </NavContainer>
  );
};

export default NavigationContainer;
