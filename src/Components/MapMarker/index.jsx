import React from 'react';
import {Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const MapMarker = ({coordinate, price, onPress, isSelected}) => {

  const styles = StyleSheet.create({
    marker: {
      backgroundColor: isSelected ? "#94B7D7" : '#fff',
      padding: 5,
      borderRadius: 20,
      borderColor: '#94B7D7',
      borderWidth: 1,
    },
    markerText: {
      fontWeight: 'bold',
      color: isSelected ? '#fff' : '#94B7D7',
    }
  });

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={styles.marker}><Text style={styles.markerText}>${price}</Text></View>
    </Marker>
  );
}


export default MapMarker;

