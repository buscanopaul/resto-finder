import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('onboardingkey').then(appData => {
      console.log(appData);
    });
  }, []);

  const handleResetStorage = () => {
    AsyncStorage.setItem('onboardingKey', 'false');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleResetStorage}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
