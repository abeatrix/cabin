import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Post from '../../Components/Post/index'

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
