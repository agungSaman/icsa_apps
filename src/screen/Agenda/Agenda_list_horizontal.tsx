import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import agendaStyles from '../../styles/agendaStyles';
import {SpotlightS} from '../../models/agendaModels';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Dimensions.get('window').width;

interface AgendaItemProps {
  spotlight: SpotlightS[];
}

const AgendaHorizontalList: React.FC<AgendaItemProps> = ({spotlight}) => {
  return (
    <ScrollView horizontal={true}>
      {spotlight.map(item => (
        <View style={agendaStyles.columnList}>
          <View style={agendaStyles.containerBody}>
            <Image source={{uri: item.image.url}} style={styles.image} />
          </View>
          <View style={agendaStyles.containerTexts}>
            <Text style={agendaStyles.textBody}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
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

export default AgendaHorizontalList;
