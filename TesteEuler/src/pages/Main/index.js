import React, { Component } from 'react';

import { View } from 'react-native';

// import { Creators as AuthActions } from '~/store/ducks/auth';
import { connect } from 'react-redux';

// import { Container } from './styles';

class Main extends Component {

  render() {
    console.tron.log('props', this.props.auth)
    return <View />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);
