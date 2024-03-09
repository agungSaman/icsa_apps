/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, Linking, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Home/Home_page';
import ProfileScreen from '../profile/profile_page';
import ForumScreen from '../Forum/Forum_page';
import PaymentScreen from '../Payment/Payment_page';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomAlerts from '../../components/CustomAlert';

const Tab = createBottomTabNavigator();
const supportedURL = 'whatsapp://send?text=hello&phone=628811312390';

interface CsAlert {
  alertIcon: string;
  alertMessage: string;
  visible: boolean;
  dualButton: boolean;
}

const MainPage: React.FC = () => {
  const [visiState, setVisible] = React.useState<CsAlert>({
    alertIcon: '',
    alertMessage: '',
    visible: false,
    dualButton: false,
  });

  const handleAlert = (
    status: boolean,
    dualButton: boolean,
    message: string,
    icon: string,
  ) => {
    setVisible(prev => ({
      ...prev,
      visible: status,
      dualButton: dualButton,
      alertMessage: message,
      alertIcon: icon,
    }));
  };

  const handleSendWhatsApps = async () => {
    await Linking.openURL(supportedURL);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={stylesBottom.container}>
              <Image
                source={require('../../assets/icons/home.png')}
                style={{width: 22, height: 18, tintColor: color, padding: 5}}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={stylesBottom.container}>
              <Image
                source={require('../../assets/icons/forum.png')}
                style={{width: 25, height: 18, tintColor: color, padding: 5}}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={stylesBottom.container}>
              <Image
                source={require('../../assets/icons/ic_profile.png')}
                style={{width: 25, height: 25, tintColor: color, padding: 5}}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={stylesBottom.container}>
              <Image
                source={require('../../assets/icons/payment.png')}
                style={{width: 22, height: 25, tintColor: color, padding: 5}}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              onPress={() => {
                handleAlert(
                  true,
                  true,
                  'Kami akan alihkan ke aplikasi Whatsapp',
                  'success',
                );
              }}>
              <View style={stylesBottom.container}>
                <CustomAlerts
                  iconAlert={visiState.alertIcon}
                  visible={visiState.visible}
                  title={''}
                  subTitle={visiState.alertMessage}
                  isDualButton={visiState.dualButton}
                  hideDialog={() => handleAlert(false, false, '', '')}
                  actionDialog={function (): void {
                    handleSendWhatsApps();
                  }}
                />
                <Image
                  source={require('../../assets/icons/ic_whatsapp.png')}
                  style={{width: 22, height: 22, tintColor: color, padding: 5}}
                />
              </View>
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const stylesBottom = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;
