import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AboutSubheading from './AboutSubheading';

const AboutHeading = ({user, datingStatus}) => {
  const {heading, character} = user;

  return (
    <View style={styles.aboutHeadingContainer}>
      <Text style={styles.aboutTitle}>
        {heading.name}, {heading.location}, {heading.age}
      </Text>
      <AboutSubheading characterText={character} datingStatus={datingStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutHeadingContainer: {
    flex: 1,
    marginBottom: 30,
  },
  aboutTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
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

export default AboutHeading;
