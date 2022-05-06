import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const DATA = [
  {
    id: '1',
    title: 'S&R',
    category: 'Pizza',
    distance: '15 Min',
    rating: '5.0',
    imageURL: {
      uri: 'https://images.deliveryhero.io/image/fd-ph/LH/q3fx-hero.jpg',
    },
  },
  {
    id: '2',
    title: 'Greenwich',
    category: 'Pizza',
    distance: '45 Min',
    rating: '4.0',
    imageURL: {
      uri: 'https://cdn.phonebooky.com/blog/wp-content/uploads/2020/07/07141325/Pizza-and-Lasagna-Trio-from-Greenwich.jpg',
    },
  },
  {
    id: '3',
    title: 'Jabee',
    category: 'Chicken',
    distance: '5 Min',
    rating: '4.3',
    imageURL: {
      uri: 'https://qsrmedia.asia/sites/default/files/styles/opengraph/public/2021-05/jollibee_bucket_3.png',
    },
  },
  {
    id: '4',
    title: 'McDonalds',
    category: 'Pasta',
    distance: '30 Min',
    rating: '3.9',
    imageURL: {
      uri: 'https://cdn1.matadornetwork.com/blogs/1/2018/09/McDonalds-menu-items-from-around-the-world-1200x900.jpeg',
    },
  },
];

const HomeList = (props: Props) => {
  const navigation = useNavigation();

  const handleFoodList = (title: String) => {
    navigation.navigate('foodlist', {title: title});
  };

  const renderRestaurants = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleFoodList(item.title)}
        style={tw`rounded-lg pb-8`}>
        <ImageBackground
          style={tw`h-70 rounded-lg`}
          imageStyle={{borderRadius: 10}}
          source={item.imageURL}
          resizeMode="cover">
          <LinearGradient
            style={tw`flex flex-col justify-between p-4 h-full rounded-lg`}
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <View
              style={tw`bg-white w-25 flex flex-row justify-center p-2 rounded-full px-3`}>
              <Text style={tw`text-black`}>Category</Text>
            </View>

            <View>
              <Text style={tw`text-xl text-white font-bold pb-1`}>
                {item.title}
              </Text>
              <Text style={tw`text-white`}>
                {item.distance} | {item.rating} Rating
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`px-6`}>
      <FlatList
        data={DATA}
        renderItem={renderRestaurants}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeList;
