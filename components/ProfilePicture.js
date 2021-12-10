import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import profile_1 from '../assets/images/profile-1.jpg';

const ProfilePicture = () => {
  return (
    <View style={styles.profileContainer}>
      <ImageBackground
        source={profile_1}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View style={styles.paidTag}>
          <Text style={styles.paidText}>Paid</Text>
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
    marginBottom: 30,
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
  paidText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePicture;
