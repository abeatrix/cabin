import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    fullname: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#071C58',
    },
    aboutText: {
        fontSize: 12,
        color: '#2D57A7'
    },
    rowText: {
        fontSize: 12,
        padding: 10,
        color: '#071C58'
    },
    carousel: {
        margin: 5,
        backgroundColor: '#E8EDF3',
        height: 200,
        width: '100%',
        paddingVertical: 30
    },
    btn: {
        position: 'absolute',
        bottom: 30,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 40,
        backgroundColor: '#071C58',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#E8EDF3',
        fontWeight: 'bold'
    },
    aboutForm: {
        height: 40,
        width: '60%',
        borderColor: '#071C58',
        borderWidth: 1
    },
    aboutFormBtn: {
        height: 40,
        width: '20%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#071C58',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBtn: {
        margin: 20,
    }
});

export default styles;
