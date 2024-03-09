import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  rowContainer: {
    flex: 1,
    paddingTop: 0,
    flexDirection: 'row',
    width: 420,
    justifyContent: 'space-between',
  },
  imageStyle: {
    flex: 0,
    width: '50%',
    alignItems: 'center',
  },
  imageStyleCarousels: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  imageStyleBodys: {
    width: 372,
    height: 120,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  imageStyleHeaders: {
    flex: 1,
    height: 20,
    width: 150,
    alignContent: 'center',
  },
  iconStylesPerson: {
    flex: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  iconStyles: {
    flex: 0,
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnMenus: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSeeAll: {
    width: '100%',
    backgroundColor: 'white',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMenu: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveBox: {
    height: '100%',
    width: '100%',
  },
  containerText: {
    flex: 0,
    height: 35,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerTexts: {
    flex: 0,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerBanner: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBodys: {
    height: 151,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCarousel1: {
    flex: 1,
  },
  containerCarousel2: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
  },
  textCarouselStyle: {
    textAlign: 'center',
    fontSize: 30,
  },
  textHeaders: {
    fontSize: 18,
    color: 'black',
  },
  textHeadersBody: {
    fontSize: 18,
    fontFamily: 'Centrale Sans Light',
    color: 'black',
    textAlign: 'left',
    fontWeight: '700',
  },
  textBody: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  textButton: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default globalStyles;
