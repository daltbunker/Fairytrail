import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../assets/styles';

const Header = ({title, saveHandler, saveState}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButtonContainer}>
        <Icon name="left" size={24} color="#9979EC" />
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        onPress={saveHandler}
        disabled={saveState ? false : true}>
        <Text
          style={{
            ...defaultStyles.heading,
            paddingLeft: 4,
            color: saveState ? '#9979EC' : 'white',
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Profile',
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: 15,
    backgroundColor: 'white',
  },
  text: {
    ...defaultStyles.heading,
    color: 'black',
    textAlign: 'center',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    ...defaultStyles.heading,
    color: '#9979EC',
    paddingLeft: 4,
  },
});

export default Header;
