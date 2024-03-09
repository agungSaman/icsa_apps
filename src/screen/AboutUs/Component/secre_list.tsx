import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalTextStyle from '../../../styles/globalTextStyle';
import colors from '../../../config/colors';
import {Member} from '../../../models/secretariatModels';

interface memberListProps {
  item: Member;
}

const SecretariatList: React.FC<memberListProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          item.image.url !== null
            ? {uri: item.image.url}
            : require('../../../assets/icons/ic_persons.png')
        }
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={GlobalTextStyle.textSmallBlackBold}>{item.name}</Text>
        <Text style={GlobalTextStyle.textSmallBlack}>{item.position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  lastContainer: {
    marginBottom: 0,
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: colors.LIGHT_GRAY,
    position: 'absolute',
    left: 40,
  },
  line1: {
    width: 2,
    height: '70%',
    backgroundColor: colors.LIGHT_GRAY,
    marginTop: 30,
    left: 40,
  },
  line2: {
    width: 2,
    height: '70%',
    backgroundColor: colors.LIGHT_GRAY,
    marginBottom: 30,
    left: 40,
  },
  marker: {
    width: 80,
    height: 27,
    borderRadius: 15,
    borderColor: colors.WHITE,
    borderWidth: 4,
    alignItems: 'center',
    backgroundColor: colors.RED,
    marginRight: 20,
  },
  content: {
    flex: 0,
    width: '74%',
    paddingVertical: 10,
    marginLeft: 15,
    flexDirection: 'column',
  },
  year: {
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 2,
  },
});

export default SecretariatList;
