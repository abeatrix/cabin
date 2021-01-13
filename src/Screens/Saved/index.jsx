import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import Post from '../../Components/Post/index'

// DUMMY DATA
import feed from '../../../assets/data/feed'

const SavedScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Saved Cabins</Text>
            <FlatList
            data={feed}
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
