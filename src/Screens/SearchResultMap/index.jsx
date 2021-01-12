import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const SearchResultMapScreen = (props) => {
    return (
        <View style={styles.container}>
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4342,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}
          >
            <Marker
              coordinate={{latitude: 37.78825, longitude: -122.4342,}}
              // title={marker.title}
              // description={marker.description}
            />

          </MapView>
        </View>
      );
}

export default SearchResultMapScreen;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
