import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import HomeDiscover from '../components/home/HomeDiscover';
import HomeSearch from '../components/home/HomeSearch';
import HomeCategory from '../components/home/HomeCategory';
import HomeList from '../components/home/HomeList';

type Props = {};

const HomeScreen = (props: Props) => {
  useEffect(() => {
    AsyncStorage.getItem('onboardingkey').then(appData => {
      console.log(appData);
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white dark:bg-black flex flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeDiscover />
        <HomeSearch />
        <HomeCategory />
        <HomeList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
