import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../Screens/SearchResult'
import SearchResultMapScreen from '../Screens/SearchResultMap'

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#94B7D7',
            indivatorStyle: {
                backgroundColor: '#94B7D7'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResultScreen} />
            <Tab.Screen name={'map'} component={SearchResultMapScreen} />
        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
