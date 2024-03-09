import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/routing/AppNavigator';
import {MenuProvider} from 'react-native-popup-menu';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MenuProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </MenuProvider>
    </NavigationContainer>
  );
};

export default App;
