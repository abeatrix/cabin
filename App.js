import React from 'react';
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
