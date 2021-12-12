import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
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

  toggleDatingStatusChanged = () => {
    this.setState({datingStatusChanged: !this.state.datingStatusChanged});
  };

  // Event on DatingSelector clicked in main app view
  onSelectorClicked = () => {
    this.setState({modalDisplay: true});
  };

  // Event on select button clicked in modal
  onSelectClicked = isDating => {
    if (isDating) {
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
          saveHandler={this.toggleDatingStatusChanged}
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
    marginHorizontal: 20,
  },
});

export default App;
