import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Character from './Character';

const AboutSubheading = ({characterText, datingStatus}) => {
  return (
    <View style={styles.subheadingContainer}>
      <Character text={characterText} />
      <View style={styles.datingStatusDisplay}>
        <Text style={styles.datingStatusText}>{datingStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subheadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datingStatusDisplay: {
    backgroundColor: '#E53B90',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    overflow: 'hidden',
    borderRadius: 10,
  },
  datingStatusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutSubheading;
