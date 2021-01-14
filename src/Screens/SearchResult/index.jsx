import React from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../Components/Post'

const SearchResultScreen = ({posts}) => {

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
