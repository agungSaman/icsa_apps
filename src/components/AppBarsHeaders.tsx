/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {Image, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import AppBarStyle from '../styles/appBarStyle';
import GlobalTextStyle from '../styles/globalTextStyle';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';

interface MyAppBarProps {
  title: string;
  isHome: boolean;
  isRegisters: boolean;
}

const MyAppBar: React.FC<MyAppBarProps> = ({isHome, title, isRegisters}) => {
  const navigated = useNavigation();

  const goToPage = (page: string) => {
    navigated.navigate(page as never);
  };
  return (
    <View style={isHome === true ? AppBarStyle.header : AppBarStyle.headers}>
      {isHome === true ? (
        <Appbar.Header style={AppBarStyle.appBar}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.RED} />
          <View style={AppBarStyle.column}>
            <View style={{alignItems: 'flex-end', marginRight: 0}}>
              <View style={AppBarStyle.rowMenu}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Klik Notification');
                  }}>
                  <Image
                    source={require('../assets/icons/notif.png')}
                    style={AppBarStyle.iconMenu}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    console.log('Chat Admin');
                  }}>
                  <Image
                    source={require('../assets/icons/chat.png')}
                    style={AppBarStyle.iconMenu}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                flex: 1,
                marginLeft: isHome ? 30 : 10,
                marginTop: 30,
              }}>
              <View style={AppBarStyle.rowContainer}>
                <View style={AppBarStyle.column}>
                  <Text style={GlobalTextStyle.textAppBars}>
                    Hello, {title.split('@')[0]}!
                  </Text>
                  <Text style={GlobalTextStyle.textAppBarsSmall}>
                    Non Member
                  </Text>
                </View>
                <Image
                  source={require('../assets/icons/personicon.png')}
                  style={AppBarStyle.iconPerson}
                />
              </View>
            </View>
          </View>
        </Appbar.Header>
      ) : (
        <Appbar.Header style={AppBarStyle.appBars}>
          <View style={AppBarStyle.column}>
            <View style={AppBarStyle.row}>
              <TouchableOpacity
                onPress={() => {
                  if (isRegisters === true) {
                    goToPage('Registration');
                  } else if (
                    title === 'Profile' ||
                    title === 'History and Milestone' ||
                    title === 'Achievement' ||
                    title === 'Membership' ||
                    title === 'Organization' ||
                    title === 'Secretariat'
                  ) {
                    goToPage('AboutUs');
                  } else if (title === 'Member List') {
                    goToPage('Membership');
                  } else {
                    goToPage('MainPage');
                  }
                }}>
                <View style={AppBarStyle.container}>
                  <Image
                    source={require('../assets/icons/ic_arrow_back.png')}
                    style={AppBarStyle.image}
                  />
                </View>
              </TouchableOpacity>
              <View style={AppBarStyle.rowContainer}>
                <Title style={GlobalTextStyle.textHeaders}>{title}</Title>
              </View>
            </View>
          </View>
        </Appbar.Header>
      )}
    </View>
  );
};

export default MyAppBar;
