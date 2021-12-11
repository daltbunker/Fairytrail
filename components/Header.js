import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../assets/styles';

const Header = ({title, saveHandler, saveDisplay}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="left" size={24} color="#9979EC" />
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={saveHandler}
        disabled={saveDisplay ? false : true}>
        <Text
          style={{
            ...defaultStyles.heading,
            paddingLeft: 4,
            color: saveDisplay ? '#9979EC' : 'white',
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
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    ...defaultStyles.heading,
    color: 'black',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    ...defaultStyles.heading,
    color: '#9979EC',
    paddingLeft: 4,
  },
});

export default Header;
