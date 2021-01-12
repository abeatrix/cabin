import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Router from './src/navigation/Router';

// AWS-AMPLIFY
// import Amplify from 'aws-amplify'
// import config from './src/aws-exports'
// Amplify.configure(config)

// DUMMY DATA
import feed from './assets/data/feed'
const post1 = feed[0]
const post2 = feed[1]
const post3 = feed[2]

export default function App() {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <Router />
      </>
    );
}
