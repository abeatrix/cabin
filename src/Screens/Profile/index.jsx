import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Image, FlatList, Pressable, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles';
import PostCarouselItem from '../../Components/Post/PostCarouselItem'
import { Auth } from 'aws-amplify';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../../graphql/queries'

const ProfileScreen = ({user}) => {
    const width = useWindowDimensions().width;

    const signOut = async () => {
        try{
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const [notEditing, setEditing] = useState(true)

    const [userInfo, setuserInfo] = useState([])

    const [aboutUser, setaboutUser] = useState([])

    const handleUpdateProfile = async () => {
        await Auth.updateUserAttributes(currentUser, {
            'custom:about': aboutUser,
        });
        setEditing(true)
    }

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchUser = async () => {
            let currentUser = await Auth.currentAuthenticatedUser();
            setuserInfo(currentUser)
            setaboutUser(currentUser.attributes['custom:about'])
        }
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listTodos)
                )
                setPosts(postsResult.data.listTodos.items)
                // console.log(posts)
            } catch(error) {
                console.log(error)
            }
        }
        fetchUser();
        fetchPosts();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/cJ6G9Vc/image.png'}}/>
            <Text style={styles.fullname}>@{user}</Text>
            { notEditing
            ? <TouchableOpacity
                style={styles.editBtn}
                onPress={() => setEditing(false)}
                type="submit"
                ><Text>Edit Profile</Text></TouchableOpacity>
            : <TouchableOpacity
                style={styles.editBtn}
                onPress={() => setEditing(true)}
                type="submit"
                ><Text>Cancel</Text></TouchableOpacity>
            }
            { notEditing
            ?
            <Text style={styles.aboutText}>{aboutUser ? aboutUser : 'Tell us about yourself'}</Text>
            : <View style={styles.row}>
                <TextInput
                    style={styles.aboutForm}
                    onChangeText={text => setaboutUser(text)}
                    placeholder="Tell us about yourself..."
                    placeholderTextColor="grey"
                />
                <TouchableOpacity
                    style={styles.aboutFormBtn}
                    title="submit"
                    onPress={() => handleUpdateProfile()}
                    type="submit"
                ><Text style={styles.btnText}>Submit</Text></TouchableOpacity>
            </View>
            }
            {/*<View style={styles.row}>
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
                    <Text style={styles.rowText}>2021</Text>
                </View>
            </View>*/}

            {/* Listings */}
            <Text style={styles.rowTitle}>LISTINGS</Text>
            <View style={styles.carousel}>
                <FlatList
                data={posts}
                renderItem={({item}) => <PostCarouselItem key={item.id} post={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                decelerationRate={'fast'}
                />
          </View>
          <Pressable style={styles.btn} onPress={signOut}>
              <Text style={styles.btnText}>Log Out</Text>
          </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen;

