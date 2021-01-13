import React from 'react'
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native'
import styles from './styles';
import PostCarouselItem from '../../Components/Post/PostCarouselItem'
//DUMMY DATA
import places from '../../../assets/data/feed'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const ProfileScreen = (props) => {
    const width = useWindowDimensions().width;

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/cJ6G9Vc/image.png'}}/>
            <Text style={styles.fullname}>Bruno Torres</Text>
            <Text>Edit Profile</Text>
            <Text style={styles.about}>Enjoy sharing my vacation with travlers and introduce them to local culture.</Text>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.rowTitle}>LANGUAGE</Text>
                    <Text style={styles.rowText}>English, French</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.rowTitle}>LOCATION</Text>
                    <Text style={styles.rowText}>Los Angeles, CA</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.rowTitle}>MEMBER SINCE</Text>
                    <Text style={styles.rowText}>2020</Text>
                </View>
            </View>

            {/* Listings */}
            <Text style={styles.rowTitle}>LISTINGS</Text>
            <View style={styles.carousel}>
                <FlatList
                data={places}
                renderItem={({item}) => <PostCarouselItem key={item.id} post={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                decelerationRate={'fast'}
                />
          </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

