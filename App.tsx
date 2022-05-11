import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingStackNavigation from './src/navigation/OnboardingStackNavigation';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import { Provider } from 'react-redux'
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

interface AppData {
  appData: null;
}

const App = () => {
  const [onboard, setOnboard] = useState();

  useEffect(() => {
    const appData = AsyncStorage.getItem('onboardingKey').then(appData => {
      setOnboard(appData);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {onboard == null || onboard == false ? (
            <Stack.Screen
              name="app-onboarding"
              component={OnboardingStackNavigation}
            />
          ) : (
            <Stack.Screen name="app-main" component={MainStackNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
