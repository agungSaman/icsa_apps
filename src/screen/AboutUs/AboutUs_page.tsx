import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/styles';
import MyAppBar from '../../components/AppBarsHeaders';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import GlobalTextStyle from '../../styles/globalTextStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SplashScreenProps} from '../../routing/AppNavigator';
import {useNavigation} from '@react-navigation/native';

const AboutUsPage: React.FC = () => {
  const navigation = useNavigation<SplashScreenProps>();

  const goToPage = (page: string) => {
    navigation.navigate(page as never);
  };
  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.container}>
          <View style={globalStyles.responsiveBox}>
            <MyAppBar title="About Us" isHome={false} isRegisters={false} />

            <View style={globalStyles.column}>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => {
                    goToPage('ProfileUs');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_profile.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            Profile
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    goToPage('Historimilestone');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_milestone.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            History and Milestone
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    goToPage('Achievement');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_achievement.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            Achievement
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    goToPage('Membership');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_membership.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            Membership
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    goToPage('Organization');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_organization.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            Organization
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    goToPage('Secretariat');
                  }}>
                  <View style={styles.containerBody}>
                    <View style={styles.row}>
                      <View style={styles.row1}>
                        <Image
                          source={require('../../assets/icons/ic_info_secretariat.png')}
                          style={styles.image}
                        />
                        <View style={styles.containerText}>
                          <Text style={GlobalTextStyle.textLargeBlack}>
                            Secretariat
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../../assets/icons/ic_arrow_right.png')}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  containerBody: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 365,
    height: 83,
    margin: 10,
    marginTop: 10,
    shadowColor: '#000',
    borderColor: 'grey',
    borderWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 0,
  },
  containerText: {
    width: 365,
    marginLeft: 10,
    justifyContent: 'center',
  },
  row: {
    width: 350,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  row1: {
    width: 140,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  image: {
    width: 40.31,
    height: 40.31,
    backgroundColor: 'white',
    overflow: 'hidden',
    resizeMode: 'cover',
  },
});

export default AboutUsPage;
