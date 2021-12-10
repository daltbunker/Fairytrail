import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DatingSelector = () => {
  return (
    <View style={styles.datingSelectorContainer}>
      <Text style={styles.text}>
        Fairytrail Mode (tell others now you’re not open to dating)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  datingSelectorContainer: {
    flexDirection: 'column',
    marginTop: 0,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7EBB89',
  },
});

export default DatingSelector;
