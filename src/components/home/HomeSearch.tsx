import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';

type Props = {};

const HomeSearch = (props: Props) => {
  const [search, setSearch] = useState('');

  return (
    <View style={tw`shadow-xl mb-7 px-6`}>
      <TextInput
        style={tw`bg-white h-12 p-3 rounded-md`}
        onChangeText={setSearch}
        value={search}
        placeholder="search"
      />
    </View>
  );
};

export default HomeSearch;
