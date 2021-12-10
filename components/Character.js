import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Character = ({text}) => {
  return (
    <View style={styles.characterContainer}>
      <Text style={styles.characterLabel}>Character:</Text>
      <Text style={styles.characterName}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'column',
  },
  characterLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#9979EC',
  },
});

export default Character;
