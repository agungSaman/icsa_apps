import * as React from 'react';
import {Image, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import colors from '../config/colors';

interface CustomAlertsProps {
  iconAlert: string;
  title: string;
  subTitle: string;
  visible: boolean;
  isDualButton: boolean;
  hideDialog: () => void;
  actionDialog: () => void;
}

const CustomAlerts: React.FC<CustomAlertsProps> = ({
  iconAlert,
  title,
  subTitle,
  visible,
  isDualButton,
  hideDialog,
  actionDialog,
}) => {
  return (
    <Portal>
      <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
        <View style={styles.row}>
          <Image
            source={
              iconAlert === 'error'
                ? require('../assets/icons/ic_warning_red.png')
                : require('../assets/icons/ic_warning_green.png')
            }
            style={styles.image}
          />
          <View style={styles.column}>
            {title !== '' ? (
              <Dialog.Title style={styles.title}>{title}</Dialog.Title>
            ) : (
              <></>
            )}
            <Dialog.Content>
              <Text style={styles.text} variant="bodyMedium">
                {subTitle}
              </Text>
            </Dialog.Content>
          </View>
        </View>
        {isDualButton === true ? (
          <View style={styles.rowButton}>
            <Button
              mode="contained"
              style={styles.buttonOk}
              onPress={actionDialog}>
              <Text style={styles.text1}>Ok</Text>
            </Button>
            <Button
              mode="contained"
              style={styles.buttonCancel}
              onPress={hideDialog}>
              <Text style={styles.text1}>Cancel</Text>
            </Button>
          </View>
        ) : (
          <Button mode="contained" style={styles.buttonOk} onPress={hideDialog}>
            <Text style={styles.text1}>Ok</Text>
          </Button>
        )}
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  dialog: {
    borderRadius: 10,
  },
  buttonOk: {
    borderRadius: 10,
    width: 100,
    height: 36,
    alignSelf: 'center',
    margin: 10,
    backgroundColor: colors.RED,
  },
  buttonCancel: {
    borderRadius: 10,
    width: 100,
    height: 36,
    alignSelf: 'center',
    margin: 10,
    backgroundColor: colors.LIGHT_GRAY,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    width: 300,
  },
  image: {
    width: 40.31,
    height: 40.31,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    resizeMode: 'stretch',
    marginLeft: 60,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.BLACK,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
});

export default CustomAlerts;
