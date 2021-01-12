import React from 'react';
import { View, Text, Image } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

const PostCarouselItem = ({post}) => {

    const pic = post.image
    const defaultpic = 'https://cdn.dribbble.com/users/2233706/screenshots/8256191/media/9a8a3f67617ea74ae27dd1a0135e8bf5.png'

    const width = useWindowDimensions().width;

    return (
        <View style={styles.container, {width: width-60}}>
            <View style={styles.wrapper}>
                {/* Image */}
                <Image style={styles.image}
                source={{uri: pic}}/>

                <View style={styles.right}>
                    {/* Bed & Bedroom */}
                    <Text style={styles.rooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                    {/* Type & Description */}
                    <Text style={styles.overview} numberOfLines={2}>{post.type}. {post.title}</Text>

                    {/* Final Price */}
                    <Text style={styles.finalprice}>${post.newPrice} / night</Text>

                </View>
            </View>
        </View>
    )
}

export default PostCarouselItem
