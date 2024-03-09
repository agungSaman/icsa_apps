import {StyleSheet} from 'react-native';

const agendaStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  containerList: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerText: {
    flex: 0,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  containerTexts: {
    flex: 0,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  responsiveBox: {
    height: '100%',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnListVertical: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnList: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeaders: {
    fontSize: 18,
    color: 'black',
  },
  textHeadersBody: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'left',
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
  textNon: {
    fontSize: 16,
    color: 'black',
  },
  imageStyleCarousels: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default agendaStyles;
