import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import globalStyles from '../../styles/styles';
import agendaStyles from '../../styles/agendaStyles';
import AgendaHorizontalList from './Agenda_list_horizontal';
import authService from '../../services/auth.service';
import {SpotlightS, UpcomingS} from '../../models/agendaModels';
import AgendaListVertical from './Agenda_list_vertical';
import MyAppBar from '../../components/AppBarsHeaders';

const AgendaScreen: React.FC = () => {
  const [spotlight, setSpotlightData] = useState<SpotlightS[] | null>(null);
  const [upcoming, setUpcomingData] = useState<UpcomingS[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getAgendaData();
        console.log('data agenda:', data);
        setSpotlightData(data?.spotlight || []);
        setUpcomingData(data?.upcoming || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  console.log('dataSpotlight', spotlight);
  console.log('dataUpcomming', upcoming);
  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <MyAppBar title={'Agenda'} isHome={false} isRegisters={false} />
        <View style={agendaStyles.container}>
          <View style={agendaStyles.responsiveBox}>
            <View style={agendaStyles.column}>
              <View style={agendaStyles.containerText}>
                <Text style={agendaStyles.textHeaders}>Spotlight Event</Text>
              </View>
              {spotlight ? (
                <View style={agendaStyles.container}>
                  <Text style={agendaStyles.textBody}>Data Not Found</Text>
                </View>
              ) : (
                <AgendaHorizontalList spotlight={spotlight || []} />
              )}
            </View>

            <View style={agendaStyles.columnListVertical}>
              <View style={agendaStyles.rowSpaceBetween}>
                <View style={agendaStyles.containerText}>
                  <Text style={agendaStyles.textHeaders}>Upcoming</Text>
                </View>
                <View style={agendaStyles.containerText}>
                  <Text style={agendaStyles.textHeadersBody}>See All</Text>
                </View>
              </View>
            </View>

            {upcoming ? (
              <View style={agendaStyles.container}>
                <Text style={agendaStyles.textBody}>Data Not Found</Text>
              </View>
            ) : (
              <AgendaListVertical upcoming={upcoming || []} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default AgendaScreen;
