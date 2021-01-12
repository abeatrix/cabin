import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        marginLeft: 20,
        fontSize: 100,
        fontWeight: 'bold',
        color: '#fff',
        width: '70%',
    },
    btn: {
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: '#fff',
        width: '50%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#94B7D7'
    },
    searchbar: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        zIndex: 10,
        marginHorizontal: 10,
        width: Dimensions.get('screen').width-20,
    },
    searchbarText: {
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#071C58',
    }
});

export default styles;
