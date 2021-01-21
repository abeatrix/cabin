import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import ExploreNavigator from './ExploreNavigator';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PostScreen from '../Screens/PostScreen';
import SavedScreen from '../Screens/Saved';
import ProfileScreen from '../Screens/Profile';
import InboxScreen from '../Screens/Inbox';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({user}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#94B7D7',
    }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={InboxScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="smile-o" size={25} color={color} />
          ),
        }}
      >
        {() =>(
            <ProfileScreen user={user} />
          )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
