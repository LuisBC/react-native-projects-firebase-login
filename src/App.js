import React from 'react';

import NavigationContainer from '@navigators/NavigationContainer';
import AuthContextProvider from '@store/auth-context';

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer />
    </AuthContextProvider>
  );
};

export default App;
