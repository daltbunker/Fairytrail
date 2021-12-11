import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import AboutHeading from './components/About/AboutHeading';
import AboutCardList from './components/About/AboutCardList';
import DatingSelector from './components/DatingSelector';
import ModalMain from './components/Modal/ModalMain';
import users from './data/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datingStatusChanged: false,
      datingStatus: 'Dating & Friends',
      modalDisplay: false,
    };
  }

  onDatingStatusChange = () => {
    this.setState({datingStatusChanged: !this.state.datingStatusChanged});
  };

  onSelectorClicked = () => {
    this.setState({modalDisplay: true});
  };

  // eslint-disable-next-line prettier/prettier
  onSelectClicked = (value) => {
    if (value) {
      this.setState({
        datingStatusChanged: true,
        datingStatus: 'Dating & Friends',
        modalDisplay: false,
      });
    } else {
      this.setState({
        datingStatusChanged: true,
        datingStatus: 'Only Friends',
        modalDisplay: false,
      });
    }
  };

  onCancelClicked = () => {
    this.setState({modalDisplay: false});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          saveDisplay={this.state.datingStatusChanged}
          saveHandler={this.onDatingStatusChange}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfilePicture />
          <AboutHeading
            user={users.user1}
            datingStatus={this.state.datingStatus}
          />
          <AboutCardList cards={users.user1.aboutCards} />
          <DatingSelector
            modalDisplay={this.state.modalDisplay}
            selectorHandler={this.onSelectorClicked}
            selectorText={this.state.datingStatus}
          />
          <ModalMain
            isVisible={this.state.modalDisplay}
            selectHandler={this.onSelectClicked}
            cancelHandler={this.onCancelClicked}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
});

export default App;
