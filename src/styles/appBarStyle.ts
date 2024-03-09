import {StyleSheet} from 'react-native';
import colors from '../config/colors';

const AppBarStyle = StyleSheet.create({
  appBar: {
    flex: 0,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
    backgroundColor: colors.RED,
    width: '100%',
    height: 153,
    alignContent: 'center',
  },
  appBars: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 40,
    margin: 10,
    alignContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginRight: 10,
  },
  header: {
    flex: 0,
    height: 165,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: 'transparent',
  },
  headers: {
    flex: 0,
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: 'transparent',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowMenu: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 0,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
  textLarge: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  textSmall: {
    fontSize: 14,
    color: 'white',
  },
  iconPerson: {
    flex: 0,
    width: 40,
    height: 40,
    marginLeft: 70,
    alignItems: 'center',
  },
  iconMenu: {
    flex: 0,
    width: 20,
    height: 22,
    marginRight: 22,
    marginTop: 10,
    tintColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 15.31,
    height: 15.31,
    backgroundColor: 'red',
    alignSelf: 'center',
    overflow: 'hidden',
    resizeMode: 'contain',
  },
});

export default AppBarStyle;
