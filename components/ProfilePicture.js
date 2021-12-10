import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import profile_1 from '../assets/images/profile-1.jpg';

const ProfilePicture = () => {
  return (
    <View style={styles.profileContainer}>
      <ImageBackground
        source={profile_1}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View style={styles.paidTag}>
          <Text style={{color: 'white'}}>Paid</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    height: 400,
    overflow: 'hidden',
    borderRadius: 4,
  },
  backgroundContainer: {
    flex: 1,
  },
  paidTag: {
    backgroundColor: '#E53B90',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    overflow: 'hidden',
    // borderTopLeftRadius: 4,
    borderBottomRightRadius: 20,
  },
});

export default ProfilePicture;
