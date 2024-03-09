import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';
import {News} from '../models/homeModels';
import GlobalTextStyle from '../styles/globalTextStyle';
import Moment from 'moment';
import HTML from 'react-native-render-html';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Dimensions.get('window').width;

interface NewsItemProps {
  item: News;
}

const NewsCardItems: React.FC<NewsItemProps> = ({item}) => {
  var dt = item.created_at.toString();
  const {width: contentWidth} = useWindowDimensions();
  return (
    <View style={styles.column}>
      <View key={item.flag.id} style={styles.container}>
        <Image source={{uri: item.image.url}} style={styles.image} />
      </View>
      <View key={item.id} style={styles.containerTexts}>
        <View style={styles.columnText}>
          <View style={styles.row}>
            <Text style={GlobalTextStyle.textSmallBlack}>{item.title}</Text>
            <Text style={GlobalTextStyle.textSmallBlack}>
              {Moment(dt).format('d/MM/yyyy')}
            </Text>
          </View>
          <View style={styles.containerHtml}>
            <HTML
              contentWidth={contentWidth}
              source={{html: item.description}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 263,
    height: 116,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    borderColor: 'grey',
    borderWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8,
  },
  containerTexts: {
    flex: 0,
    height: 60,
    width: 263,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
  },
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  image: {
    width: 263,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 116,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: 'black',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    width: 240,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NewsCardItems;
