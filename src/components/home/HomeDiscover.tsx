import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {businessesSelector} from '../../redux/slice/homeSlice';
import Geolocation from '@react-native-community/geolocation';

type Props = {};

const HomeDiscover = (props: Props) => {
  const businesses = useSelector(businessesSelector);
  const [currentCity, setCurrentCity] = useState();
  let watchID;

  const handleResetStorage = () => {
    AsyncStorage.setItem('onboardingKey', 'false');
  };

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
  });

  const getOnTimeLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        fetch(
          `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`,
        )
          .then(response => response.json())
          .then(actualData => setCurrentCity(actualData.city))
          .catch(err => {
            console.log(err.message);
          });
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
        fetch(
          `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`,
        )
          .then(response => response.json())
          .then(actualData => setCurrentCity(actualData.city))
          .catch(err => {
            console.log(err.message);
          });
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

  return (
    <View style={tw`px-6`}>
      <Text style={tw`text-2xl font-bold`}>Discover</Text>
      <Text style={tw`text-lg pb-3`}>
        {businesses.length} Restaurants in
        <TouchableOpacity onPress={handleResetStorage}>
          <Text style={tw`font-bold text-orange-400 text-lg pt-1`}>
            {' '}
            {currentCity ? currentCity : null} City
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default HomeDiscover;
