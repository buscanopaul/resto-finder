import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screen/OnboardingScreen';
import MainStackNavigation from './MainStackNavigation';
import HomeScreen from '../screen/HomeScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const OnboardingStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="main" component={MainStackNavigation} />
      </Stack.Navigator>
    </>
  );
};

export default OnboardingStackNavigation;
