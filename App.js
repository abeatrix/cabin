import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import HomeScreen from './src/Screens/Home/index'
import Post from './src/Components/Post/index'
import Entype from 'react-native-vector-icons/Entypo';
// AWS-AMPLIFY
// import Amplify from 'aws-amplify'
// import config from './src/aws-exports'
// Amplify.configure(config)

export default function App() {
  return (
    <View>
        {/* <HomeScreen/> */}
        <Post />
    </View>
  );
}
