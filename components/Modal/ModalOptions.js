import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ModalButtons = ({selected, selectEvent}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Mode</Text>
      <TouchableOpacity onPress={() => selectEvent('dating')}>
        <Text
          style={selected.datingSelected ? styles.selectedText : styles.text}>
          Dating {'&'} Friends
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectEvent('friends')}>
        <Text
          style={!selected.datingSelected ? styles.selectedText : styles.text}>
          Only Friends
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  text: {
    textAlign: 'center',
    width: 200,
    fontSize: 21,
    fontWeight: 'bold',
    padding: 3,
    backgroundColor: 'white',
  },
  selectedText: {
    textAlign: 'center',
    width: 200,
    fontSize: 21,
    fontWeight: 'bold',
    padding: 3,
    backgroundColor: '#CCCCCC',
  },
});

export default ModalButtons;
