import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import AboutHeading from './components/AboutHeading';
import AboutCardList from './components/AboutCardList';
import DatingSelector from './components/DatingSelector';
import users from './data/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datingStatusChanged: false,
    };
  }

  changeDatingStatus = () => {
    this.setState({datingStatusChanged: !this.state.datingStatusChanged});
  };

  render() {
    return (
      <SafeAreaView style={styles.appContainer}>
        <Header saveState={this.state.datingStatusChanged} />
        <ScrollView>
          <ProfilePicture />
          <AboutHeading user={users.user1} />
          <AboutCardList cards={users.user1.aboutCards} />
          <DatingSelector />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    // fontFamily: 'Nunito-Bold',
  },
});

export default App;
