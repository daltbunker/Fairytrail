import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutCard = ({card, cardHeight}) => {
  return (
    <View style={styles.aboutCardContainer}>
      <Text style={{...styles.text, color: card[2]}}>{card[0]}</Text>
      <Text style={styles.text}>{card[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutCardContainer: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutCard;
