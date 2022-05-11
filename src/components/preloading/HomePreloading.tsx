import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const HomePreloading = (props: Props) => {
  return (
    <View>
      <View style={tw`h-70 mb-5 rounded-lg bg-gray-300`} />
      <View style={tw`h-70 mb-5 rounded-lg bg-gray-300`} />
      <View style={tw`h-70 mb-5 rounded-lg bg-gray-300`} />
    </View>
  );
};

export default HomePreloading;
