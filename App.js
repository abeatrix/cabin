import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import HomeScreen from './src/Screens/Home/index'
import SearchResultScreen from './src/Screens/SearchResult'
import SearchResultMapScreen from './src/Screens/SearchResultMap'
import { StatusBar } from 'expo-status-bar';
import Router from './src/Navigation/Router';
import { withAuthenticator } from 'aws-amplify-react-native'

// AWS-AMPLIFY
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const App = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <Router />
      </>
    );
}

export default withAuthenticator(App)
