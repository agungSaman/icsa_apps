import React from 'react';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyAppBar from '../../components/AppBarsHeaders';
import globalStyles from '../../styles/styles';

const NewsMainPage: React.FC = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={globalStyles.container}>
          <MyAppBar title={'News'} isHome={false} isRegisters={false} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default NewsMainPage;
