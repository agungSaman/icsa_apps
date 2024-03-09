import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../../styles/styles';
import MyAppBar from '../../components/AppBarsHeaders';
import authService from '../../services/auth.service';
import GlobalTextStyle from '../../styles/globalTextStyle';
import colors from '../../config/colors';
import {DataSecretariat, Member} from '../../models/secretariatModels';
import SecretariatList from './Component/secre_list';
import SecretariatAddress from './Component/secre_address';

const SecretariatScreen: React.FC = () => {
  const [secreData, setSecretariatData] = useState<DataSecretariat[] | []>([]);
  const [memData, setMemData] = useState<Member[] | []>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoSecretariatData();
        setSecretariatData(data?.data ?? []);
        secreData.forEach(items => setMemData(items.member));
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [secreData]);
  return (
    <View style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <View style={globalStyles.responsiveBox}>
          <MyAppBar title="Secretariat" isHome={false} isRegisters={false} />

          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.timeline}>
              {memData.map((secDat, index) => (
                <SecretariatList key={index} item={secDat} />
              ))}
            </View>
          </ScrollView>

          <View style={styles.container}>
            <View style={styles.containerBody}>
              <Text style={GlobalTextStyle.textLargeBlack}>ICSA Contact</Text>
              <Text style={styles.text1}>
                Please contact us for further inquiries
              </Text>
            </View>

            <View style={styles.containerText}>
              <SecretariatAddress
                title={'Address'}
                description={
                  'Epiwalk Epicentrum, Level 5th Suite A509, Jl. H. R. Rasuna Said Kuningan, Epicentrum Area - Jakarta 12960'
                }
              />
              <SecretariatAddress
                title={'Phone Number'}
                description={'(021) 2994 1815 or +628-811312-390'}
              />
              <SecretariatAddress
                title={'Email Address'}
                description={'secretariat@icsa-indonesia.org'}
              />
            </View>

            <View style={styles.containerBody1}>
              <Text style={GlobalTextStyle.textLargeBlack}>
                ICSA Social Media
              </Text>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/icons/ic_facebook.png')}
                  style={styles.image}
                />
                <Image
                  source={require('../../assets/icons/ic_linkedin.png')}
                  style={styles.image}
                />
                <Image
                  source={require('../../assets/icons/ic_instagram.png')}
                  style={styles.image}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 25,
    padding: 10,
  },
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    height: '50%',
    margin: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
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
    height: '12%',
    marginTop: 20,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBody1: {
    flex: 0,
    height: '20%',
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
  row: {
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 10,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
});

export default SecretariatScreen;
