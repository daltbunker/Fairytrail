import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import users from '../data/users';
import AboutSubheading from './AboutSubheading';

const AboutHeading = () => {
  const {heading, character, datingStatus} = users.user1;

  return (
    <View style={styles.aboutHeadingContainer}>
      <Text style={styles.aboutTitle}>
        {heading.name}, {heading.location}, {heading.age}
      </Text>
      <AboutSubheading
        characterText={character}
        datingStatusText={datingStatus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutHeadingContainer: {
    flex: 1,
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
