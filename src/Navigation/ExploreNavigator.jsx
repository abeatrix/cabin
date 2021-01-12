import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import SearchResultScreen from '../Screens/SearchResult';
import SearchResultTabNavigator from "./SearchResultTabNavigator";

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
