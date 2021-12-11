import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ModalButtons = ({selectHandler, cancelHandler}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={cancelHandler}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.divider}>|</Text>
      <TouchableOpacity onPress={selectHandler}>
        <Text style={styles.text}>Select</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    padding: 15,
    borderTopWidth: 2,
    borderColor: '#DDDDDD',
  },
  text: {
    color: '#9979EC',
    fontSize: 21,
    fontWeight: 'bold',
  },
  divider: {
    fontSize: 30,
    color: '#DDDDDD',
  },
});

export default ModalButtons;
