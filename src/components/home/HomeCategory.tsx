import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const HomeCategory = (props: Props) => {
  const DATA = [
    {
      id: '1',
      title: 'Recommended',
    },
    {
      id: '2',
      title: 'Pizza',
    },
    {
      id: '3',
      title: 'Chicken',
    },
    {
      id: '4',
      title: 'Burger',
    },
  ];

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={tw`${
          item.id == '1' ? 'bg-orange-400' : 'bg-gray-100'
        }  mr-4 p-3 rounded-full px-6`}>
        <Text style={tw`text-${item.id == '1' ? 'white' : 'black'}`}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`pl-6 pb-7`}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeCategory;
