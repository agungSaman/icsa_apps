import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Carousels} from '../models/homeModels';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Dimensions.get('window').width;

interface CarouselItemProps {
  item: Carousels;
}

const CarouselItem: React.FC<CarouselItemProps> = ({item}) => {
  return (
    <View key={item.id} style={styles.container}>
      <Image source={{uri: item.image.url}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 190,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 190,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselItem;
