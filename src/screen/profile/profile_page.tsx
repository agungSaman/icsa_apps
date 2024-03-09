import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import MyAppBar from '../../components/AppBarsHeaders';
import globalStyles from '../../styles/styles';

const ProfileScreen: React.FC = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.container}>
          <View style={globalStyles.responsiveBox}>
            <MyAppBar title="Profile" isHome={false} isRegisters={false} />
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ProfileScreen;
