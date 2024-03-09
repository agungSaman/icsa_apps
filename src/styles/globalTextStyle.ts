import {StyleSheet} from 'react-native';
import colors from '../config/colors';

const GlobalTextStyle = StyleSheet.create({
  textHeaders: {
    fontFamily: 'Centrale Sans Light',
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: '400',
  },
  textAppBars: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  textAppBarsSmall: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 12,
    color: 'white',
  },
  textLarge: {
    fontSize: 20,
    fontFamily: 'Centrale Sans Light',
    fontWeight: '700',
    color: 'white',
  },
  textLargeBlack: {
    fontSize: 20,
    fontFamily: 'Centrale Sans Light',
    fontWeight: '700',
    color: 'black',
  },
  textLargeRed: {
    fontSize: 20,
    fontFamily: 'Centrale Sans Light',
    fontWeight: '700',
    color: 'red',
  },
  textSmall: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 14,
    color: 'white',
  },
  textSmallRed: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 14,
    color: 'red',
  },
  textSmallBlackBold: {
    fontFamily: 'Centrale Sans Light',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  textSmallBlack: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 14,
    color: 'black',
  },
  textSmallGrey: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 14,
    color: 'grey',
  },
  textMenu: {
    fontFamily: 'Centrale Sans Light',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'black',
  },
});

export default GlobalTextStyle;
