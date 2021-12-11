import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AboutCard from './AboutCard';

const AboutCardList = ({cards}) => {
  const AboutCards = cards.map(card => {
    return <AboutCard card={card} key={card[0]} />;
  });
  return (
    <View style={styles.container}>
      <Text>{AboutCards}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default AboutCardList;
