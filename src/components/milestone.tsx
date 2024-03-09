import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Milestone} from '../models/historyMilestoneModel';
import colors from '../config/colors';

interface milestoneProps {
  item: Milestone;
  isLast: boolean;
  isFirst: boolean;
}

const Milestones: React.FC<milestoneProps> = ({item, isLast, isFirst}) => {
  return (
    <View style={[styles.container, isLast && styles.lastContainer]}>
      {isFirst ? (
        <View style={styles.line1} />
      ) : isLast ? (
        <View style={styles.line2} />
      ) : (
        <View style={styles.line} />
      )}
      <View style={styles.marker}>
        <Text style={styles.year}>{item.year}</Text>
      </View>
      <View style={styles.content}>
        <Text>{item.description_en}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  lastContainer: {
    marginBottom: 0,
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: colors.LIGHT_GRAY,
    position: 'absolute',
    left: 40,
  },
  line1: {
    width: 2,
    height: '70%',
    backgroundColor: colors.LIGHT_GRAY,
    marginTop: 30,
    left: 40,
  },
  line2: {
    width: 2,
    height: '70%',
    backgroundColor: colors.LIGHT_GRAY,
    marginBottom: 30,
    left: 40,
  },
  marker: {
    width: 80,
    height: 27,
    borderRadius: 15,
    borderColor: colors.WHITE,
    borderWidth: 4,
    alignItems: 'center',
    backgroundColor: colors.RED,
    marginRight: 20,
  },
  content: {
    flex: 0,
    width: '74%',
    paddingVertical: 10,
  },
  year: {
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});

export default Milestones;
