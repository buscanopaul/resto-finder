import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {getRestaurantsAsync} from '../../redux/slice/homeSlice';

type Props = {};

const DATA = [
  {
    id: '1',
    title: 'Recommended',
    bgColor: 'bg-gray-100',
  },
  {
    id: '2',
    title: 'Pizza',
    bgColor: 'bg-gray-100',
  },
  {
    id: '3',
    title: 'Chicken',
    bgColor: 'bg-gray-100',
  },
  {
    id: '4',
    title: 'Burger',
    bgColor: 'bg-gray-100',
  },
];

const HomeCategory = (props: Props) => {
  const dispatch = useDispatch();
  const [btnSelectBg, setBtnSelectedBg] = useState<Number>(1);

  const handleCategory = item => {
    let passTitle: string;
    if (item.title === 'Recommended') {
      passTitle = 'Restaurant';
    } else {
      passTitle = item.title;
    }

    setBtnSelectedBg(item.id);

    const location = async () => {
      const data = Geolocation.getCurrentPosition(info => {
        dispatch(
          getRestaurantsAsync({
            searchTerm: passTitle,
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
          }),
        );
      });
    };

    location();
  };

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={tw`${
          btnSelectBg == item.id ? 'bg-orange-400' : 'bg-gray-100'
        }  mr-4 p-3 rounded-full px-6`}
        onPress={() => handleCategory(item)}>
        <Text style={tw`text-${btnSelectBg == item.id ? 'white' : 'black'}`}>
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
