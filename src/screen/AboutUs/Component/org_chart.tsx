import * as React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import authService from '../../../services/auth.service';
import {ScrollView} from 'react-native-gesture-handler';

const OrgChartScreen = () => {
  const [chartData, setChartData] = React.useState<string | ''>('');
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoOrganizationData();
        setChartData(data?.charts.url ?? '');
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {chartData !== '' ? (
          <Image source={{uri: chartData}} style={styles.image} />
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHtml: {
    marginLeft: 0,
    marginBottom: 0,
  },
  container: {
    flex: 0,
    margin: 10,
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
  image: {
    height: 450,
    width: 600,
    borderWidth: 2,
  },
});

export default OrgChartScreen;
