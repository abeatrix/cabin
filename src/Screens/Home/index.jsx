import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return (
        <View>
            <Pressable
            style={styles.searchbar}
            onPress={()=>console.warn('Search Btn clicked')}>
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
