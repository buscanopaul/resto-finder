import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import {getRestaurantsAsync} from '../../redux/slice/homeSlice';
import Geolocation from '@react-native-community/geolocation';

type Props = {};

const HomeSearch = (props: Props) => {
  const dispatch = useDispatch();

  const handleSearch = text => {
    if (text.length > 3) {
      const location = async () => {
        const data = Geolocation.getCurrentPosition(info => {
          dispatch(
            getRestaurantsAsync({
              searchTerm: text,
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            }),
          );
        });
      };

      location();
    }
  };

  return (
    <View style={tw`shadow-xl mb-7 px-6`}>
      <TextInput
        style={tw`bg-white h-12 p-3 rounded-md`}
        onChangeText={text => handleSearch(text)}
        autoCorrect={false}
        placeholder="search"
      />
    </View>
  );
};

export default HomeSearch;
