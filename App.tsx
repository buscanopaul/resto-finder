/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import HomeScreen from './src/screen/HomeScreen';
import OnboardingScreen from './src/screen/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingStackNavigation from './src/navigation/OnboardingStackNavigation';
import MainStackNavigation from './src/navigation/MainStackNavigation';

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

  console.log(onboard);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {onboard == null || onboard == 'false' ? (
          <Stack.Screen
            name="app-onboarding"
            component={OnboardingStackNavigation}
          />
        ) : (
          <Stack.Screen name="app-main" component={MainStackNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
