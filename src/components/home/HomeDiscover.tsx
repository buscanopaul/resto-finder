import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const HomeDiscover = (props: Props) => {
  const handleResetStorage = () => {
    AsyncStorage.setItem('onboardingKey', 'false');
  };

  return (
    <View style={tw`px-6`}>
      <Text style={tw`text-2xl font-bold`}>Discover</Text>
      <Text style={tw`text-lg pb-3`}>
        86 Restaurants in
        <TouchableOpacity onPress={handleResetStorage}>
          <Text style={tw`font-bold text-orange-400 text-lg pt-1`}>
            {' '}
            Caloocan City
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default HomeDiscover;
