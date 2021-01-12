import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapMarker from '../../Components/MapMarker'

//DUMMY DATA
import places from '../../../assets/data/feed'

const SearchResultMapScreen = (props) => {
  const [selectedID, setSelectedID] = useState("");
  console.log('selectedID' + selectedID)

    return (
        <View style={styles.container}>
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 28.3279822,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}
          >

            {places.map(place=>
              <MapMarker
              coordinate={place.coordinate}
              price={place.newPrice}
              isSelected={place.id === selectedID}
              onPress={() => setSelectedID(place.id)}
              />
            )}
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
    marker: {
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 20,
      borderColor: '#94B7D7',
      borderWidth: 1,
    },
    markerText: {
      fontWeight: 'bold',
      // color: '#94B7D7'
    }
  });
