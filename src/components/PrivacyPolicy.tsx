import React, {useEffect, useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View} from 'react-native';
import MyAppBar from './AppBarsHeaders';
import authService from '../services/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';

const PrivacyPolicyScreen: React.FC = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<string | ''>('');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getHomeData();
        await AsyncStorage.setItem('privacyPolicy', data?.privacy_policy ?? '');
        setPrivacyPolicy(data?.privacy_policy ?? '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <MyAppBar title={'Privacy Policy'} isHome={false} isRegisters={true} />
      <View style={styles.responsiveBox}>
        <WebView source={{uri: privacyPolicy}} style={styles.webContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  webContainer: {
    flex: 0,
    height: '100%',
    marginTop: 20,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCheckbox: {
    flex: 0,
    backgroundColor: colors.WHITE,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 15,
  },
  responsiveBox: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
  containerAvoid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBox: {
    flex: 0,
    height: '142%',
    width: '100%',
    marginTop: 10,
    padding: 15,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: 'grey',
  },
  createAccountText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  createAccountButton: {
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  logo: {
    flex: 0,
    width: 155,
    height: 77,
    marginTop: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontFamily: 'Centrale Sans Light',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.BLACK,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  text2: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.DODGER_BLUE,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
});

export default PrivacyPolicyScreen;
