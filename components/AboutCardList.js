import React from 'react';
import {View, StyleSheet} from 'react-native';
import AboutCard from './AboutCard';

const AboutCardList = ({cards}) => {
  return (
    <View style={styles.listContainer}>
      <AboutCard card={cards[0]} />
      <AboutCard card={cards[1]} />
      <AboutCard card={cards[2]} />
      <AboutCard card={cards[3]} />
      <AboutCard card={cards[4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 10,
  },
});

export default AboutCardList;
