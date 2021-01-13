import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.fullname}>Gabe Torres</Text>
            <Text>Edit Profile</Text>
            <View style={styles.row}>
                <Text style={styles.rowTitle}>LANGUAGE</Text>
                <Text style={styles.rowTitle}>LOCATION</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

