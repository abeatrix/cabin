import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
      <View>
          <Pressable
          style={styles.searchbar}
          onPress={()=> navigation.navigate('Destination Search')}>
              <Fontisto name='search' size={25} color={'#7CB0DF'}/>
              <Text style={styles.searchbarText}>Where are we going?</Text>
          </Pressable>
          <ImageBackground
          source={require('../../../assets/images/home.jpg')}
          style={styles.image}>
              <Text style={styles.title}>Go Wild</Text>
              <Pressable
              style={styles.btn}
              onPress={()=>console.warn('Explore Btn clicked')}>
                  <Text style={styles.btnText}>Explore nearby cabins</Text>
              </Pressable>
          </ImageBackground>
      </View>
  )
}

export default HomeScreen;
