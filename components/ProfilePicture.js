import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import profile_1 from '../assets/images/profile-1.jpg';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={profile_1}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.tag}>
          <Text style={styles.text}>Paid</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 450,
    overflow: 'hidden',
    borderRadius: 4,
    marginBottom: 30,
  },
  image: {
    flex: 1,
  },
  tag: {
    backgroundColor: '#E53B90',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    overflow: 'hidden',
    borderBottomRightRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePicture;
