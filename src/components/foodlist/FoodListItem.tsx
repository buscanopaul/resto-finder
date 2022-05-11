import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart, cartSelector} from '../../redux/slice/detailSlice';
import {useSelector} from 'react-redux';

type Props = {};

const FoodListItem = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleCart = item => {
    dispatch(
      addToCart({
        title: item.title,
        description: item.description,
        price: item.price,
        quantity: quantity,
        image: item.image,
      }),
    );
    navigation.navigate('cart');
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={tw`flex flex-row pb-10`}>
      <Image
        style={[tw`w-2/5 h-45 rounded-lg bg-gray-300`, {resizeMode: 'cover'}]}
        source={props.item.image}
      />
      <View style={tw`w-3/5 pl-6 flex flex-col justify-between`}>
        <View>
          <Text style={tw`font-bold text-xl pb-1`}>{props.item.title}</Text>
          <Text style={tw`text-gray-300`}>{props.item.description}</Text>
        </View>
        <View>
          <View style={tw`flex flex-row justify-between items-center pb-2`}>
            <Text style={tw`font-bold text-2xl`}>
              <Text style={tw`text-gray-400`}>{'\u20B1'} </Text>
              {props.item.price}
            </Text>
            <Text style={tw`text-gray-300`}>/</Text>
            <TouchableOpacity onPress={handleDecrement}>
              <AntDesign
                name="minuscircleo"
                style={{color: '#f4953e', fontSize: 20}}
              />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}>
              <AntDesign
                name="pluscircleo"
                style={{color: '#f4953e', fontSize: 20}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleCart(props.item)}
            style={[
              tw`flex flex-row justify-center p-3 rounded-full`,
              {backgroundColor: '#f7f6f5'},
            ]}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodListItem;
