/* eslint-disable react-native/no-inline-styles */
import React, {Component, useCallback} from 'react';
import {Linking, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';
import colors from '../config/colors';
import globalStyles from '../styles/styles';
import {useNavigation} from '@react-navigation/native';
import {Overlay} from 'react-native-elements';

const supportedURL = 'whatsapp://send?text=hello&phone=628811312390';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return (
    <TouchableOpacity
      style={{width: 160, padding: 10, backgroundColor: colors.DODGER_BLUE}}
      onPress={handlePress}>
      <Text style={globalStyles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

interface ModalDialogProps {
  tittle: string;
  subtitle: string;
}

// const ModalDialog: React.FC = () => {
class ModalDialog extends Component<ModalDialogProps> {
  navigated = useNavigation();
  componentDidUpdate(prevProps: ModalDialogProps) {
    // Memeriksa perubahan props di sini
    if (this.props.tittle !== prevProps.tittle) {
      // Lakukan sesuatu setelah props berubah
      // Contoh: Memuat data atau melakukan efek samping
    }
  }

  render() {
    return (
      <Overlay isVisible={true}>
        <View style={styles.centeredView}>
          <Dialog
            onDismiss={() => {
              // setDialogVisible(false);
            }}
            width={0.9}
            visible={true}
            rounded
            dialogTitle={
              <DialogTitle
                title={this.props.tittle}
                style={{
                  backgroundColor: '#F7F7F8',
                }}
                hasTitleBar={false}
                align="left"
              />
            }
            footer={
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  bordered
                  onPress={() => {
                    // setDialogVisible(false);
                    this.navigated.navigate('MainPage' as never);
                  }}
                  key="button-1"
                />
                <OpenURLButton url={supportedURL}>OK</OpenURLButton>
              </DialogFooter>
            }>
            <DialogContent
              style={{
                backgroundColor: '#F7F7F8',
              }}>
              <Text>{this.props.subtitle}</Text>
            </DialogContent>
          </Dialog>
        </View>
      </Overlay>
    );
  }
}

export default ModalDialog;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
