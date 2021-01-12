import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    rooms: {
        marginVertical: 10,
        fontSize: 15,
        color: '#94B7D7',
    },
    overview: {
        fontSize: 17,
        lineHeight: 25
    },
    prices: {
        marginVertical: 10,
        fontSize: 17
    },
    oldprice: {
        color: '#94B7D7',
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    discount: {
        fontWeight: 'bold'
    },
    finalprice: {
        color: '#94B7D7', //#2D57A7
        textDecorationLine: 'underline',
    },
});

export default styles;
