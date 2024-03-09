import React, {useEffect, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import MyAppBar from '../../components/AppBarsHeaders';
import globalStyles from '../../styles/styles';
import authService from '../../services/auth.service';
import colors from '../../config/colors';
import HTML from 'react-native-render-html';

const AchievementScreen: React.FC = () => {
  const [achievmentData, setAchievementData] = useState<string | ''>('');
  const {width: contentWidth} = useWindowDimensions();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoAchievementData();
        setAchievementData(data ?? '');
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
          <MyAppBar title="Achievement" isHome={false} isRegisters={false} />

          <View style={styles.container}>
            <View style={styles.containerHtml}>
              <HTML
                contentWidth={contentWidth}
                source={{html: achievmentData}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    height: '100%',
    marginTop: 15,
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
});

export default AchievementScreen;
