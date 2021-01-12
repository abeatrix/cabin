import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import GuestsScreen from './src/screens/Guests';

// AWS-AMPLIFY
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

export default function App() {
  return (
    <View style={styles.container}>
      <GuestsScreen />
      <Text>Open up App.js to start working on your app! <Entype name={'phone'} size={25}/></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
