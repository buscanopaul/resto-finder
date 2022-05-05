import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const MainStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainStackNavigation;
