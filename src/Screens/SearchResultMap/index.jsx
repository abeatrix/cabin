import React, {useState, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, FlatList } from 'react-native';
import MapMarker from '../../Components/MapMarker'
import PostCarouselItem from '../../Components/Post/PostCarouselItem'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../../graphql/queries'

const SearchResultMapScreen = (props) => {
  const [selectedID, setSelectedID] = useState("");

  const [posts, setPosts] = useState([])

  // retrieve posts from aws database using graphql
  useEffect(()=>{
      const fetchPosts = async () => {
          try {
              const postsResult = await API.graphql(
                  graphqlOperation(listTodos)
              )
              setPosts(postsResult.data.listTodos.items)
              console.log(posts)
          } catch(error) {
              console.log(error)
          }
      }
      fetchPosts();
  }, [])

  const width = useWindowDimensions().width;

  const carouselRef = useRef();
  const mapRef = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if(viewableItems.length>0){
      const selectedPlace = viewableItems[0].item;
      setSelectedID(selectedPlace.id)
    }
  })

  useEffect(() => {
    if (!selectedID || !carouselRef) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedID)
    carouselRef.current.scrollToIndex({index})

    const placeOnMap = posts[index];
    const region = {
      latitude: placeOnMap.latitude,
      longitude: placeOnMap.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    mapRef.current.animateToRegion(region);
  }, [selectedID])

    return (
        <View style={styles.container}>
          <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 28.3279822,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}
          >

            {posts.map(post=>
              <MapMarker
                coordinate={{latitude: post.latitude, longitude: post.longitude}}
                price={post.newPrice}
                isSelected={post.id === selectedID}
                onPress={() => setSelectedID(post.id)}
              />
            )}
          </MapView>

          <View style={styles.carousel}>
            <FlatList
              ref={carouselRef}
              data={posts}
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
    },
    carousel: {
      position: 'absolute',
      bottom: 10,
      margin: 5,
    }
  });
