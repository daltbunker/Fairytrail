import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DatingSelector = ({selectorHandler, selectorText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Fairytrail Mode (tell others now you’re not open to dating)
      </Text>
      <TouchableOpacity style={styles.selector} onPress={selectorHandler}>
        <Text style={styles.text}>{selectorText}</Text>
        <Icon name="caretdown" size={24} color="#555555" />
      </TouchableOpacity>
      <Text style={styles.bottomBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 0,
    marginBottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7EBB89',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBorder: {
    width: 350,
    height: 2,
    backgroundColor: 'black',
  },
});

export default DatingSelector;
