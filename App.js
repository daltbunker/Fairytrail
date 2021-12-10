import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';

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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header saveState={this.state.datingStatusChanged} />
          <ProfilePicture />
          <Text style={styles.text}>About</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    // fontFamily: 'Nunito-Bold',
  },
});

export default App;
