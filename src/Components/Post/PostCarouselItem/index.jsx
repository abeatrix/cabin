import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const PostCarouselItem = ({post}) => {
    const width = useWindowDimensions().width;
    const pic = post.image
    const defaultpic = 'https://cdn.dribbble.com/users/2233706/screenshots/8256191/media/9a8a3f67617ea74ae27dd1a0135e8bf5.png'

    const styles = StyleSheet.create({
        container: {
            width: width-80,
            height: 120,
            padding: 2,
            shadowColor: "#2D57A7",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
        },
        wrapper: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden'
        },
        image: {
            height: '100%',
            aspectRatio: 1,
            resizeMode: 'cover',
        },
        rooms: {
            marginVertical: 10,
            fontSize: 13,
            color: '#94B7D7',
        },
        overview: {
            fontSize: 15,
        },
        finalprice: {
            color: '#94B7D7',
            fontWeight: 'bold',
            marginVertical: 10,
            fontSize: 15,
        },
        right: {
            marginHorizontal: 10,
            flex: 1,
        }
    });


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image}
                source={{uri: pic}}/>

                <View style={styles.right}>
                    <Text style={styles.rooms}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={styles.overview} numberOfLines={2}>{post.type}. {post.title}</Text>
                    <Text style={styles.finalprice}>${post.newPrice} / night</Text>
                </View>
            </View>
        </View>
    )
}

export default PostCarouselItem
