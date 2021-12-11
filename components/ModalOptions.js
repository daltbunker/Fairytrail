import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ModalButtons = ({selected, selectEvent}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Mode</Text>
      <TouchableOpacity
        style={{
          backgroundColor: selected.datingSelected ? '#CCCCCC' : 'white',
          marginBottom: 5,
        }}
        onPress={() => selectEvent('dating')}>
        <Text style={styles.text}>Dating {'&'} Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selected.friendsSelected ? '#CCCCCC' : 'white',
        }}
        onPress={() => selectEvent('friends')}>
        <Text style={styles.text}>Only Friends</Text>
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
    fontSize: 21,
    fontWeight: 'bold',
    padding: 3,
  },
});

export default ModalButtons;
