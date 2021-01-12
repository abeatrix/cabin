import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image}
            source={{uri: 'https://cdn.dribbble.com/users/2233706/screenshots/8256191/media/9a8a3f67617ea74ae27dd1a0135e8bf5.png?'}}/>

            {/* Bed & Bedroom */}
            <Text style={styles.rooms}>5 bed 3 bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.overview} numberOfLines={2}>Sugar Pine Escape is a cozy mountain escape that backs up to the National Forest on a less busy portion of the mountain in Sugarloaf, CA. Sugarloaf is a small community that sits just minutes up a small hill above Big Bear City and is only a short distance (approximately 8 miles) from Big Bear Lake, Bear Mountain Ski Resort, Snow Summit Ski Resort and the Village! Take a short drive and enjoy everything that Big Bear has to offer... or if you choose, cuddle up by the fire and escape the crowds.</Text>

            {/* Old Price vs Discount Price */}
            <Text style={styles.prices}>
            <Text style={styles.oldprice}>$50</Text>
            <Text style={styles.discount}> $40</Text> / night
            </Text>

            {/* Final Price */}
            <Text style={styles.finalprice}>$250 Total</Text>

        </View>
    )
}

export default Post
