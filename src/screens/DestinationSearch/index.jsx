import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles.jsx';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import {GOOGLEAPI} from '@env';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        fetchDetails
        query={{
          key: `${GOOGLEAPI}`,
          language: 'en',
          types: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={(item:GooglePlaceData) => <SuggestionRow item={item}/>}
      />

    </View>
  );
};

export default DestinationSearchScreen;
