import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import MyAppBar from '../../components/AppBarsHeaders';
import globalStyles from '../../styles/styles';
import {ScrollView} from 'react-native-gesture-handler';
import MyHomeMenu from '../../components/MyHomeMenu';
import authService from '../../services/auth.service';
import {Carousels, News, Spotlight} from '../../models/homeModels';
import CarouselItem from '../../components/CarouselCardsItems';
import NewsCardItems from '../../components/NewsCardsItems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpothLightImage from '../../components/spotlighImage';
import GlobalTextStyle from '../../styles/globalTextStyle';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const [homeData, setHomeData] = useState<Spotlight[] | null>(null);
  const [carouselData, setCarouselData] = useState<Carousels[] | null>(null);
  const [newsData, setNewsData] = useState<News[] | null>(null);
  const [userName, setUserName] = useState<string | ''>('');
  const navigated = useNavigation();

  const goToPage = (page: string) => {
    navigated.navigate(page as never);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getHomeData();
        const userNames = (await AsyncStorage.getItem('username')) ?? '';
        setHomeData(data?.spotlight ?? []);
        setCarouselData(data?.carousel ?? []);
        setNewsData(data?.news ?? []);
        setUserName(userNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.container}>
          <View style={globalStyles.responsiveBox}>
            <MyAppBar title={userName} isHome={true} isRegisters={false} />

            <ScrollView>
              <ScrollView horizontal pagingEnabled>
                {carouselData?.map(item => (
                  <CarouselItem key={item.id} item={item} />
                ))}
              </ScrollView>

              <MyHomeMenu />

              <View style={globalStyles.columnText}>
                <View style={globalStyles.containerText}>
                  <Text style={globalStyles.textHeadersBody}>
                    Spotlight Event
                  </Text>
                </View>
                <ScrollView horizontal pagingEnabled>
                  {homeData?.map(item => (
                    <SpothLightImage key={item.id} item={item} />
                  ))}
                </ScrollView>
              </View>

              <View style={globalStyles.columnText}>
                <View style={globalStyles.rowSpaceBetween}>
                  <View style={globalStyles.containerText}>
                    <Text style={globalStyles.textHeadersBody}>
                      News Update
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      goToPage('NewsMainPage');
                    }}>
                    <View style={globalStyles.containerSeeAll}>
                      <Text style={GlobalTextStyle.textSmallRed}>See All</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <ScrollView horizontal>
                  {newsData?.map(item => (
                    <NewsCardItems key={item.id} item={item} />
                  ))}
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default HomeScreen;
