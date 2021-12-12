import React, {Component} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import ModalButtons from './ModalButtons';
import ModalOptions from './ModalOptions';

class ModalMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datingSelected: true,
    };
  }

  setSelection = isDating => {
    if (isDating) {
      this.setState({
        datingSelected: true,
      });
    } else {
      this.setState({
        datingSelected: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.isVisible}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <ModalOptions
                selected={this.state}
                selectEvent={this.setSelection}
              />
              <ModalButtons
                selectHandler={() =>
                  this.props.selectHandler(this.state.datingSelected)
                }
                cancelHandler={() => this.props.cancelHandler()}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#9979EC',
    fontSize: 21,
    fontWeight: 'bold',
  },
});

export default ModalMain;
