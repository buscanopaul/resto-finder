import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {
  title: String;
};

const FoodListSectionHeader = (props: Props) => {
  return (
    <View style={tw`pb-4 bg-white`}>
      <Text style={tw`text-2xl font-bold`}>{props.title}</Text>
    </View>
  );
};

export default FoodListSectionHeader;
