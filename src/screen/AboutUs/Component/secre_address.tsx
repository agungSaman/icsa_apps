import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalTextStyle from '../../../styles/globalTextStyle';
import colors from '../../../config/colors';

interface secreAddressProps {
  title: string;
  description: string;
}

const SecretariatAddress: React.FC<secreAddressProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          title === 'Address'
            ? require('../../../assets/icons/ic_location.png')
            : title === 'Phone Number'
            ? require('../../../assets/icons/ic_contact.png')
            : require('../../../assets/icons/ic_email.png')
        }
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={GlobalTextStyle.textSmallGrey}>{title}</Text>
        <Text style={GlobalTextStyle.textSmallBlack}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
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
    height: 70,
    width: '74%',
    marginLeft: 15,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
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

export default SecretariatAddress;
