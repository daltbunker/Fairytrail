import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AboutSubheading from './AboutSubheading';

const AboutHeading = ({user, datingStatus}) => {
  const {heading, character} = user;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {heading.name}, {heading.location}, {heading.age}
      </Text>
      <AboutSubheading characterName={character} datingStatus={datingStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default AboutHeading;
