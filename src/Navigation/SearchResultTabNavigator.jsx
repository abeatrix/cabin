import React, {useState, useEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../Screens/SearchResult'
import SearchResultMapScreen from '../Screens/SearchResultMap'
import { useRoute } from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../graphql/queries'

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {

    const route = useRoute();

    const {guests, viewport} = route.params;

    const [posts, setPosts] = useState([])

  // retrieve posts from aws database using graphql
  useEffect(()=>{
      const fetchPosts = async () => {
          try {
              const postsResult = await API.graphql(
                graphqlOperation(listTodos, {
                  filter: {
                    and: {
                      maxGuests: {
                          ge: guests
                      },
                      latitude: {
                        between: [viewport.southwest.lat, viewport.northeast.lat],
                      },
                      longitude: {
                        between: [viewport.southwest.lng, viewport.northeast.lng],
                      },
                    }
                  }
                })
              )
              setPosts(postsResult.data.listTodos.items)
              console.log(posts)
          } catch(error) {
              console.log(error)
          }
      }
      fetchPosts();
  }, [])

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#94B7D7',
            indivatorStyle: {
                backgroundColor: '#94B7D7'
            }
        }}>
            <Tab.Screen name={'list'}>
                {() =>(
                    <SearchResultScreen posts={posts} />
                )}
            </Tab.Screen>
            <Tab.Screen name={'map'}>
                {() =>(
                    <SearchResultMapScreen posts={posts} />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
