import React from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../Components/Post'

// DUMMY DATA
import feed from '../../../assets/data/feed'

const SearchResultScreen = (props) => {
    return (
        <View>
            <FlatList
            data={feed}
            renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultScreen;
