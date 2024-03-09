/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import imageLogo from '../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenProps} from '../../routing/AppNavigator';
import {MainRoutes} from '../../routing/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = (): React.ReactElement => {
  const navigation = useNavigation<SplashScreenProps>();

  useEffect(() => {
    const splashTimer = setTimeout(async () => {
      const statusLogin =
        (await AsyncStorage.getItem('loginStatus')) ?? 'false';
      if (statusLogin === 'true') {
        navigation.navigate(MainRoutes.MainPage);
      } else {
        navigation.navigate(MainRoutes.Login);
      }
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={imageLogo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default SplashScreen;
