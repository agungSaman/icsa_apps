import React from 'react';
import {Spotlight} from '../models/homeModels';
import {Image, StyleSheet, View} from 'react-native';

interface SpothLightImageProps {
  item: Spotlight;
}

const SpothLightImage: React.FC<SpothLightImageProps> = ({item}) => {
  return (
    <View key={item.id} style={styles.container}>
      <Image source={{uri: item.image.url}} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 151,
    width: 372,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 372,
    height: 151,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default SpothLightImage;
