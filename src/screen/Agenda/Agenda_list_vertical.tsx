import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {UpcomingS} from '../../models/agendaModels';
import agendaStyles from '../../styles/agendaStyles';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Dimensions.get('window').width;

interface UpcomingItemProps {
  upcoming: UpcomingS[];
}

const AgendaListVertical: React.FC<UpcomingItemProps> = ({upcoming}) => {
  return (
    <ScrollView horizontal={false}>
      {upcoming.map(item => (
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

export default AgendaListVertical;
