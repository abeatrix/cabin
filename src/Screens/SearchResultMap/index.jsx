import React, {useState, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, FlatList } from 'react-native';
import MapMarker from '../../Components/MapMarker'
import PostCarouselItem from '../../Components/Post/PostCarouselItem'
//DUMMY DATA
import places from '../../../assets/data/feed'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultMapScreen = (props) => {
  const [selectedID, setSelectedID] = useState("");

  const width = useWindowDimensions().width;

  const carouselRef = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if(viewableItems.length>0){
      const selectedPlace = viewableItems[0].item;
      setSelectedID(selectedPlace.id)
    }
  })

  useEffect(() => {
    console.log(selectedID)
    if (!selectedID || !carouselRef) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedID)
    carouselRef.current.scrollToIndex({index})
  }, [selectedID])

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

          <View style={styles.carousel}>
            <FlatList
              ref={carouselRef}
              data={places}
              renderItem={({item}) => <PostCarouselItem key={item.id} post={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={"center"}
              decelerationRate={'fast'}
              onViewableItemsChanged={onViewChanged.current}
              viewabilityConfig={viewConfig.current}
            />
          </View>
        </View>
      );
}

export default SearchResultMapScreen;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    map: {
      width: '100%',
      height: '100%',
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
    },
    carousel: {
      position: 'absolute',
      bottom: 10,
      margin: 5,
    }
  });
