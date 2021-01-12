import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import HomeScreen from './src/Screens/Home/index'
import SearchResultScreen from './src/Screens/SearchResult'
import SearchResultMapScreen from './src/Screens/SearchResultMap'
// import Router from './src/Navigation/Router'

// AWS-AMPLIFY
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    <ScrollView>
      <SearchResultMapScreen/>
      {/* <HomeScreen/> */}
      {/* <SearchResultScreen/> */}
      {/* <Router/> */}
    </ScrollView>
  );
}
