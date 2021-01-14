import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import Router from './src/Navigation/Router';
import { withAuthenticator } from 'aws-amplify-react-native'

// AWS-AMPLIFY
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { Auth } from 'aws-amplify';

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => setUser(user.username))
  .catch(err => console.log(err));
}, [])


  return (
      <>
        <StatusBar barStyle="dark-content" />
        <Router user={user} />
      </>
    );
}

export default withAuthenticator(App)
