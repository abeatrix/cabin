import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = ({post}) => {

    const pic = post.image
    const defaultpic = 'https://cdn.dribbble.com/users/2233706/screenshots/8256191/media/9a8a3f67617ea74ae27dd1a0135e8bf5.png'

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image}
            source={{uri: pic}}/>

            {/* Bed & Bedroom */}
            <Text style={styles.rooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.overview} numberOfLines={2}>{post.type}. {post.title}</Text>

            {/* Old Price vs Discount Price */}
            <Text style={styles.prices}>
            <Text style={styles.oldprice}>${post.oldPrice}</Text>
            <Text style={styles.discount}> ${post.newPrice}</Text> / night
            </Text>

            {/* Final Price */}
            <Text style={styles.finalprice}>${post.totalPrice} Total</Text>

        </View>
    )
}

export default Post
