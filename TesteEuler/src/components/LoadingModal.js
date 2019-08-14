import React, { Component } from 'react';

import { ActivityIndicator, Modal, View, Text } from 'react-native';


import { connect } from 'react-redux';
import { Creators as AppActions } from '~/store/ducks/app';

import { Container, ImagePlaceholder } from './styles';

class LoadingModal extends Component {
  state = {
    modalVisible: false,
    imgUrl: '',
  };

  componentDidMount() {
    const { isVisible, imgUrl } = this.props.modal;

    this.setState({
      modalVisible: isVisible,
      imgUrl,
    })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { modalVisible, imgUrl } = this.state;
    console.tron.log('modal', this.props.modal)
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modal.isVisible}
          onRequestClose={() => {}}>
          <Container>
            <ImagePlaceholder
              resizeMode='contain'
              source={{uri: this.props.modal.imgUrl}}
            />
            <ActivityIndicator color="#666" />
          </Container>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.app,
});

const mapDispatchToProps = dispatch => ({
 // logInRequest: (login, password) => dispatch(AuthActions.logInRequest(login, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingModal);
