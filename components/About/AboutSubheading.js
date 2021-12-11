import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Character from './Character';

const AboutSubheading = ({characterName, datingStatus}) => {
  return (
    <View style={styles.container}>
      <Character name={characterName} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{datingStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    backgroundColor: '#E53B90',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    overflow: 'hidden',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutSubheading;
