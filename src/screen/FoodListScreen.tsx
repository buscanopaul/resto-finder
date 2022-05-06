import {View, Text, SectionList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import FoodListSectionHeader from '../components/foodlist/FoodListSectionHeader';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {};

const DATA = [
  {
    title: 'Pizza',
    data: [
      {
        id: '1',
        title: 'Mozzarella Pizza',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 200,
        image: {
          uri: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg',
        },
      },
      {
        id: '2',
        title: 'Combo Pizza',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 160,
        image: {
          uri: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80',
        },
      },
      {
        id: '3',
        title: 'Pepperoni',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 180,
        image: {
          uri: 'https://www.irishtimes.com/polopoly_fs/1.4245295.1588671124!/image/image.jpg_gen/derivatives/ratio_16x9_w1200/image.jpg',
        },
      },
    ],
  },
  {
    title: 'Chicken',
    data: [
      {
        id: '11',
        title: 'Roasted Chicken',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 250,
        image: {
          uri: 'https://media.smallbiztrends.com/2021/08/Restaurant-supply-shortage.png',
        },
      },
    ],
  },
  {
    title: 'Starters',
    data: [
      {
        id: '12',
        title: 'Caesar Salad',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 140,
        image: {
          uri: 'https://www.seriouseats.com/thmb/ugNLQE6hZcoZx0Tzu780h1L3lfc=/3750x3750/smart/filters:no_upscale()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
        },
      },
      {
        id: '13',
        title: 'Fries',
        description: 'Render multiple columns, use the numColumns prop.',
        price: 70,
        image: {
          uri: 'https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer.jpg',
        },
      },
    ],
  },
];

const FoodListScreen = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerTitle: props.route.params.title});
  }, []);

  const hanldeCart = () => {
    navigation.navigate('cart');
  };

  const renderFoods = ({item}) => {
    return (
      <View style={tw`flex flex-row pb-10`}>
        <Image
          style={[tw`w-2/5 h-45 rounded-lg bg-gray-300`, {resizeMode: 'cover'}]}
          source={item.image}
        />
        <View style={tw`w-3/5 pl-6 flex flex-col justify-between`}>
          <View>
            <Text style={tw`font-bold text-xl pb-1`}>{item.title}</Text>
            <Text style={tw`text-gray-300`}>{item.description}</Text>
          </View>
          <View>
            <View style={tw`flex flex-row justify-between items-center pb-2`}>
              <Text style={tw`font-bold text-2xl`}>
                <Text style={tw`text-gray-400`}>{'\u20B1'} </Text>
                {item.price}
              </Text>
              <AntDesign
                name="minuscircleo"
                style={{color: '#f4953e', fontSize: 20}}
              />
              <Text>1</Text>
              <AntDesign
                name="pluscircleo"
                style={{color: '#f4953e', fontSize: 20}}
              />
            </View>
            <TouchableOpacity
              onPress={hanldeCart}
              style={[
                tw`w-30 flex flex-row justify-center p-3 rounded-full`,
                {backgroundColor: '#f7f6f5'},
              ]}>
              <Text>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`bg-white dark:bg-black flex flex-1`}>
      <View style={tw`px-6 pt-5`}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderFoods}
          renderSectionHeader={({section: {title}}) => (
            <FoodListSectionHeader title={title} />
          )}
        />
      </View>
    </View>
  );
};

export default FoodListScreen;
