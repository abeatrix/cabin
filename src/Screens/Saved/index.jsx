import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import Post from '../../Components/Post/index'
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../../graphql/queries'

const SavedScreen = (props) => {

    const [posts, setPosts] = useState([])

  // retrieve posts from aws database using graphql
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listTodos)
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Saved Cabins</Text>
            <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item} />}
            />
        </SafeAreaView>
    )
}

export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        color: '#2D57A7',
    }
})
