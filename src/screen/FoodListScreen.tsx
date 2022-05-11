import {View, Text, SectionList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import FoodListSectionHeader from '../components/foodlist/FoodListSectionHeader';
import {useNavigation} from '@react-navigation/native';
import FoodListItem from '../components/foodlist/FoodListItem';

type Props = {};

const DATA = [
  {
    title: 'Pizza',
    data: [
      {
        id: '1',
        title: 'Mozzarella Pizza',
        description:
          'Do you like pineapples on your pizza? What about mangoes on your pizza?',
        price: 200,
        quantity: 1,
        image: {
          uri: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg',
        },
      },
      {
        id: '2',
        title: 'Combo Pizza',
        description:
          'There are people who like their pizzas plain and simple: tomato sauce, mozzarella cheese.',
        price: 160,
        quantity: 1,
        image: {
          uri: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80',
        },
      },
      {
        id: '3',
        title: 'Pepperoni',
        description:
          'One of the joys of eating a really good pizza is finishing the whole slice – down to its crust.',
        price: 180,
        quantity: 1,
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
        description:
          'There are many reasons to visit S&R Membeship Grocery stores.',
        price: 250,
        quantity: 1,
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
        description:
          'a 16-inch New York style pizza with a tomato base, topped with different varieties of cheeses.',
        price: 140,
        quantity: 1,
        image: {
          uri: 'https://www.seriouseats.com/thmb/ugNLQE6hZcoZx0Tzu780h1L3lfc=/3750x3750/smart/filters:no_upscale()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
        },
      },
      {
        id: '13',
        title: 'Fries',
        description:
          'a 16-inch New York style pizza with a tomato base, topped with generous amounts of garlic and shrimp.',
        price: 70,
        quantity: 1,
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

  return (
    <View style={tw`bg-white dark:bg-black flex flex-1`}>
      <View style={tw`px-6 pt-5`}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <FoodListItem item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <FoodListSectionHeader title={title} />
          )}
        />
      </View>
    </View>
  );
};

export default FoodListScreen;
