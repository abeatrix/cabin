import React from 'react';
import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import SavedScreen from '../Saved';

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
      <ScrollView>
          <Pressable
          style={styles.searchbar}
          onPress={()=> navigation.navigate('Destination Search')}>
              <Fontisto name='search' size={25} color={'#7CB0DF'}/>
              <Text style={styles.searchbarText}>Where are you going?</Text>
          </Pressable>
          <ImageBackground
          source={require('../../../assets/images/home.jpg')}
          style={styles.image}>
              <Text style={styles.title}>Go Wild</Text>
              <Pressable
              style={styles.btn}
              onPress={()=> navigation.navigate('Destination Search')}>
                  <Text style={styles.btnText}>Explore nearby cabins</Text>
              </Pressable>
          </ImageBackground>
          <SavedScreen />
      </ScrollView>
  )
}

export default HomeScreen;
