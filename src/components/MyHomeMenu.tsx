import React from 'react';
import {View, Text, Image} from 'react-native';
import globalMenuStyle from '../styles/menuStyles';
import globalStyles from '../styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import GlobalTextStyle from '../styles/globalTextStyle';

const MyHomeMenus: React.FC = () => {
  const navigated = useNavigation();

  const goToPage = (page: string) => {
    navigated.navigate(page as never);
  };

  return (
    <View style={globalStyles.containerMenu}>
      <View style={globalStyles.columnMenus}>
        <View style={globalStyles.row}>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <TouchableOpacity
                onPress={() => {
                  goToPage('AboutUs');
                }}>
                <View style={globalMenuStyle.container1}>
                  <Image
                    source={require('../assets/icons/ic_information.png')}
                    style={globalMenuStyle.image}
                  />
                </View>
                <Text style={GlobalTextStyle.textMenu}>About us</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <TouchableOpacity
                onPress={() => {
                  goToPage('AgendaPage');
                }}>
                <View style={globalMenuStyle.container1}>
                  <Image
                    source={require('../assets/icons/ic_calendar_star.png')}
                    style={globalMenuStyle.image}
                  />
                </View>
                <Text style={GlobalTextStyle.textMenu}>Agenda</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <TouchableOpacity
                onPress={() => {
                  goToPage('NewsMainPage');
                }}>
                <View style={globalMenuStyle.container1}>
                  <Image
                    source={require('../assets/icons/ic_newspaper.png')}
                    style={globalMenuStyle.image}
                  />
                </View>
                <Text style={GlobalTextStyle.textMenu}>News</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <View style={globalMenuStyle.container1}>
                <Image
                  source={require('../assets/icons/ic_bullhorn.png')}
                  style={globalMenuStyle.image}
                />
              </View>
              <Text style={GlobalTextStyle.textMenu}>Promotion</Text>
            </View>
          </View>
        </View>
        <View style={globalStyles.row}>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <View style={globalMenuStyle.container1}>
                <Image
                  source={require('../assets/icons/ic_book.png')}
                  style={globalMenuStyle.image}
                />
              </View>
              <Text style={GlobalTextStyle.textMenu}>Library</Text>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <View style={globalMenuStyle.container1}>
                <Image
                  source={require('../assets/icons/ic_activiti.png')}
                  style={globalMenuStyle.image}
                />
              </View>
              <Text style={GlobalTextStyle.textMenu}>Activities</Text>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <View style={globalMenuStyle.container1}>
                <Image
                  source={require('../assets/icons/ic_certificate.png')}
                  style={globalMenuStyle.image}
                />
              </View>
              <Text style={GlobalTextStyle.textMenu}>Certification</Text>
            </View>
          </View>
          <View style={globalMenuStyle.container}>
            <View style={globalMenuStyle.columMenus}>
              <View style={globalMenuStyle.container1}>
                <Image
                  source={require('../assets/icons/ic_academy.png')}
                  style={globalMenuStyle.image}
                />
              </View>
              <Text style={GlobalTextStyle.textMenu}>Academy</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyHomeMenus;
