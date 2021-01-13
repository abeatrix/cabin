import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pagetitle: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#071C58',
    },
    avatar: {
        marginTop: 50,
        borderRadius: 50,
        width: 100,
        height: 100
    },
    row: {
        flexDirection: 'row',
    },
    rowTitle: {
        marginHorizontal: 10,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#2D57A7',
    },
    col: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    rowText: {
        fontSize: 12,
        padding: 10,
        color: '#071C58'
    },
    inbox: {
        margin: 5,
        backgroundColor: '#94B7D7',
        flex: 1,
        width: '100%',
        paddingVertical: 30
    }
});

export default styles;
