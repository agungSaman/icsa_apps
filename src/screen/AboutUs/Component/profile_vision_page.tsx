import * as React from 'react';

import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import colors from '../../../config/colors';
import authService from '../../../services/auth.service';
import HTML from 'react-native-render-html';

const ProfileVisionScreen = () => {
  const [visionData, setVisionData] = React.useState<string | ''>('');
  const [misionData, setMisionData] = React.useState<string | ''>('');
  const {width: contentWidth} = useWindowDimensions();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoProfileData();
        setVisionData(data.visi);
        setMisionData(data.misi);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.text}>Our Vision</Text>
        <View style={styles.containerHtml}>
          <HTML contentWidth={contentWidth} source={{html: visionData}} />
        </View>

        <Text style={styles.text}>Mission</Text>
        <View style={styles.containerHtml}>
          <HTML contentWidth={contentWidth} source={{html: misionData}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
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
    fontSize: 14,
    fontWeight: '700',
    color: colors.BLACK,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    fontFamily: 'Centrale Sans Light',
  },
});

export default ProfileVisionScreen;
