import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import globalStyles from '../../styles/styles';
import MyAppBar from '../../components/AppBarsHeaders';
import authService from '../../services/auth.service';
import {DataMember} from '../../models/membershipListModel';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../config/colors';
import MemberList from '../../components/MemberList';
import {Text} from 'react-native-paper';
import Button from '../../components/Button';
import GlobalTextStyle from '../../styles/globalTextStyle';
import strings from '../../config/strings';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenProps} from '../../routing/AppNavigator';

const MembershipScreen: React.FC = () => {
  const [memberListData, setMemberlistData] = useState<DataMember[] | []>([]);
  const [memberTotalData, setMemberTotalData] = useState<number | 0>(0);
  const navigation = useNavigation<SplashScreenProps>();

  const goToPage = (page: string) => {
    navigation.navigate(page as never);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoMemberListData(0);
        setMemberlistData(data?.data ?? []);
        setMemberTotalData(data?.meta.total ?? 0);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <View style={globalStyles.responsiveBox}>
          <MyAppBar title="Membership" isHome={false} isRegisters={false} />

          <View style={styles.containerHeaders}>
            <Text style={GlobalTextStyle.textLargeBlack}>Newest Member</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.timeline}>
              {memberListData.map((memberList, index) => (
                <MemberList key={index} item={memberList} />
              ))}
            </View>
          </ScrollView>
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text style={styles.text1}>
                The number of ICSA members currently exists{'  '}
                <Text style={styles.text2}>{memberTotalData}</Text>{' '}
                <Text style={styles.text1}>
                  To see the list of ICSA members, click the button below.
                </Text>
              </Text>
            </View>
            <View style={styles.button}>
              <Button
                label={strings.LIST_MEMBER}
                iconButton={false}
                onPress={() => {
                  goToPage('MemberList');
                }}
                disabled={false}
              />
            </View>

            <View style={styles.containerBody}>
              <Text style={GlobalTextStyle.textLargeRed}>Why Join Us?</Text>
            </View>
            <View style={styles.containerText}>
              <Text style={GlobalTextStyle.textSmallBlack}>
                Membership in ICSA has its benefits—including exclusive access
                to workshops, seminars and training, networking with
                stakeholders, updates and deeper reviews on the capital market
                regulations!
              </Text>

              <Text style={GlobalTextStyle.textSmallBlack}>{''}</Text>

              <Text style={GlobalTextStyle.textSmallBlack}>
                Join ICSA now to further your professional development and
                connect with the community of corporate secretaries and
                governance officers throughout Indonesia.
              </Text>
            </View>

            <View style={styles.button}>
              <Button
                label={strings.JOIN_US}
                iconButton={false}
                onPress={() => {}}
                disabled={false}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    height: '50%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerText: {
    flex: 0,
    padding: 10,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    flex: 0,
    padding: 10,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerHeaders: {
    flex: 0,
    marginTop: 30,
    height: '3%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBody: {
    flex: 0,
    height: '10%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.BLACK,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.RED,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  timeline: {
    marginTop: 0,
    flexDirection: 'column',
  },
});

export default MembershipScreen;
