import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../Screens/SearchResult'
import SearchResultMapScreen from '../Screens/SearchResultMap'
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {

    const route = useRoute();

    const {guests} = route.params;

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#94B7D7',
            indivatorStyle: {
                backgroundColor: '#94B7D7'
            }
        }}>
            <Tab.Screen name={'list'}>
                {() =>(
                    <SearchResultScreen guests={guests}/>
                )}
            </Tab.Screen>
            <Tab.Screen name={'map'}>
                {() =>(
                    <SearchResultMapScreen guests={guests}/>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
