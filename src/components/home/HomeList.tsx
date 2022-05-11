import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  businessesSelector,
  getRestaurantsAsync,
  loadingHomeSelector,
} from '../../redux/slice/homeSlice';
import {isNumber} from '../../helpers/CheckRating';
import {Distance} from '../../helpers/DistanceHelper';
import Geolocation from '@react-native-community/geolocation';
import HomePreloading from '../preloading/HomePreloading';

type Props = {};

const HomeList = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const businesses = useSelector(businessesSelector);
  const loadingHome = useSelector(loadingHomeSelector);
  let watchID;

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOnTimeLocation();
        subscribeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOnTimeLocation();
            subscribeLocation();
          } else {
            Alert.alert('Permission Denied.');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOnTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch(
          getRestaurantsAsync({
            searchTerm: 'restaurant',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
      },
      error => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        dispatch(
          getRestaurantsAsync({
            searchTerm: 'restaurant',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
      },
      error => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  const handleFoodList = (title: String) => {
    navigation.navigate('foodlist', {title: title});
  };

  const renderRestaurants = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleFoodList(item.name)}
        style={tw`rounded-lg pb-8`}>
        <ImageBackground
          style={tw`h-70 rounded-lg bg-gray-300`}
          imageStyle={{borderRadius: 10}}
          source={item.image_url ? {uri: item.image_url} : null}
          resizeMode="cover">
          <LinearGradient
            style={tw`flex flex-col justify-between p-4 h-full rounded-lg`}
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <View
              style={[
                tw`bg-white flex flex-row justify-center p-2 rounded-full px-5`,
                {alignSelf: 'flex-start'},
              ]}>
              <Text style={tw`text-black`}>
                {item.location.address2 == '' || item.location.address2 == null
                  ? item.location.city
                  : item.location.address2}
              </Text>
            </View>
            <View>
              <Text style={tw`text-xl text-white font-bold pb-1`}>
                {item.name}
              </Text>
              <Text style={tw`text-white`}>
                {Distance(item.distance)} km |{' '}
                {isNumber(item.rating)
                  ? item.rating + '.0 '
                  : item.rating + ' '}
                Rating
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`px-6`}>
      {loadingHome && <HomePreloading />}
      <FlatList
        data={businesses}
        renderItem={renderRestaurants}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeList;
