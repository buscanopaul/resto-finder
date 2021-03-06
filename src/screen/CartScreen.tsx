import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {cartSelector} from '../redux/slice/detailSlice';
import {useSelector} from 'react-redux';

type Props = {};

const CartScreen = (props: Props) => {
  const navigation = useNavigation();
  const cart = useSelector(cartSelector);

  const sumCart = cart.reduce(function (sum, current) {
    const total = current.price * current.quantity;
    return sum + total;
  }, 0);

  const renderCart = ({item}) => {
    return (
      <View
        style={tw`px-6 border-b border-gray-200 flex flex-row items-center justify-center py-3 w-full`}>
        <Image
          source={item.image}
          style={[
            tw`w-13 h-13 rounded-full bg-gray-300`,
            {resizeMode: 'cover'},
          ]}
        />
        <View style={tw`flex flex-row items-center pl-4`}>
          <View style={tw`w-50`}>
            <Text style={tw`font-bold text-lg leading-0`}>{item.title}</Text>
            <Text numberOfLines={1} style={tw`text-gray-400 pb-1`}>
              {item.description}
            </Text>
            <Text>Qty: {item.quantity}</Text>
          </View>
          <View
            style={tw`bg-gray-200 p-2 px-5 ml-4 rounded-full w-20 flex flex-row items-center justify-center`}>
            <Text>
              {'\u20B1'} {item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`bg-white flex flex-1`}>
      <FlatList
        style={tw`pt-10`}
        data={cart}
        renderItem={renderCart}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={[
          tw`flex flex-row justify-between items-center p-5 rounded-full mb-10 mx-6`,
          {backgroundColor: '#f4953e'},
        ]}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`font-bold text-lg text-white`}>
            {'\u20B1'}
            {sumCart.toLocaleString()}
          </Text>
          <Text style={tw`text-gray-200 pl-2`}>Total</Text>
        </View>
        <Text style={tw`font-bold text-xl text-white`}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
