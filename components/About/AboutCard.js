import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutCard = ({card}) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: card[3]}}>{card[1]}</Text>
      <Text style={styles.text}>{card[2]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutCard;
