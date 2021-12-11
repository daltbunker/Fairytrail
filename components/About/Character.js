import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Character = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Character:</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#9979EC',
  },
});

export default Character;
