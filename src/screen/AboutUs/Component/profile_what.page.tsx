import * as React from 'react';

import {StyleSheet, View, useWindowDimensions} from 'react-native';
import colors from '../../../config/colors';
import authService from '../../../services/auth.service';
import HTML from 'react-native-render-html';

const ProfileWhatScreen = () => {
  const [profileData, setProfileData] = React.useState<string | ''>('');
  const {width: contentWidth} = useWindowDimensions();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoProfileData();
        setProfileData(data.profile);
        console.log(data.profile);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerHtml}>
        <HTML contentWidth={contentWidth} source={{html: profileData}} />
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

export default ProfileWhatScreen;
