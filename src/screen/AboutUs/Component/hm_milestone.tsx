import React, {useEffect, useState} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import authService from '../../../services/auth.service';
import {Milestone} from '../../../models/historyMilestoneModel';
import Milestones from '../../../components/milestone';

const HmMilestoneScreen = () => {
  const [milestoneData, setMilestoneData] = useState<Milestone[] | []>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getHistoryMilestoneData();
        setMilestoneData(data?.milestone ?? []);
        console.log(data?.milestone);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [milestoneData]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.timeline}>
          {milestoneData.map((milestone, index) => (
            <Milestones
              key={index}
              item={milestone}
              isLast={index === milestoneData.length - 1}
              isFirst={index === 0}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    height: '100%',
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
  timeline: {
    flexDirection: 'column',
  },
});

export default HmMilestoneScreen;
