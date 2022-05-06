import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import FoodListScreen from '../screen/FoodListScreen';
import CartScreen from '../screen/CartScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const MainStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="foodlist"
          component={FoodListScreen}
          options={{
            headerTintColor: 'white',
            headerTitle: '',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#f4953e',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="cart"
          component={CartScreen}
          options={{
            headerTintColor: 'white',
            headerTitle: 'Cart',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#f4953e',
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStackNavigation;
