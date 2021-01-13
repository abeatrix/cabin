import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../Components/Post'
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../../graphql/queries'

const SearchResultScreen = ({guests}) => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listTodos, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listTodos.items)
                // console.log(posts)
            } catch(error) {
                console.log(error)
            }
        }
        fetchPosts();
    }, [])

    return (
        <View>
            <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultScreen;
