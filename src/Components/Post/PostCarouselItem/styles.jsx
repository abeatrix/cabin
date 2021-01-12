import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        shadowColor: "#000",
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
        lineHeight: 20,
    },
    finalprice: {
        color: '#94B7D7', //#2D57A7
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 17
    },
    right: {
        marginHorizontal: 10,
        flex: 1,
    }
});

export default styles;
