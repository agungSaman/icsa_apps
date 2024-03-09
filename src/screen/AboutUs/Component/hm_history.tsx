import React, {useEffect, useState} from 'react';

import {StyleSheet, View, useWindowDimensions} from 'react-native';
import colors from '../../../config/colors';
import authService from '../../../services/auth.service';
import HTML from 'react-native-render-html';

const HmHistoryScreen = () => {
  const [historiData, setHistoriData] = useState<string | ''>('');
  const {width: contentWidth} = useWindowDimensions();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getHistoryMilestoneData();
        setHistoriData(data?.history_en ?? '');
        console.log(data?.history_en);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerHtml}>
        <HTML contentWidth={contentWidth} source={{html: historiData}} />
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
    height: 520,
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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

export default HmHistoryScreen;
