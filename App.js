import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import HomeScreen from './src/Screens/Home/index'
import Post from './src/Components/Post/index'

// AWS-AMPLIFY
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

// DUMMY DATA
import feed from './assets/data/feed'
const post1 = feed[0]
const post2 = feed[1]
const post3 = feed[2]

export default function App() {
  return (
    <ScrollView>
      <HomeScreen/>
      <Post post={post1}/>
      <Post post={post2}/>
      <Post post={post3}/>
    </ScrollView>
  );
}
