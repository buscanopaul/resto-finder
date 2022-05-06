import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigate: (value: string) => void;
};

const OnboardingScreen = (props: Props) => {
  const navigation = useNavigation<Props>();

  const hanldeHome = () => {
    navigation.navigate('main');
    AsyncStorage.setItem('onboardingKey', 'true');
  };

  return (
    <SafeAreaView>
      <View style={tw`px-6`}>
        <View style={[tw`w-full h-3/5 p-5 pt-7`, {backgroundColor: '#f4953e'}]}>
          <Text style={tw`text-xl text-white`}>
            We make it simple to find the food you crave.
            <Text style={tw`font-bold`}> Search your desire foods.</Text>
          </Text>
          <Image
            style={styles.image}
            source={require('../assets/images/bg-foods.png')}
          />
        </View>
        <View style={tw`h-2/5 pt-15`}>
          <Text style={tw`text-5xl font-extralight`}>Find your</Text>
          <Text style={tw`text-4xl font-bold`}>Favourite Foods</Text>
          <TouchableOpacity
            style={[
              tw`w-40 p-5 justify-center flex flex-row mt-5`,
              {backgroundColor: '#f4953e'},
            ]}
            onPress={hanldeHome}>
            <Text style={tw`text-white font-bold`}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;
