import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles';

const InboxScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pagetitle}>INBOX</Text>
            <View style={styles.inbox}></View>
        </SafeAreaView>
    )
}

export default InboxScreen;

