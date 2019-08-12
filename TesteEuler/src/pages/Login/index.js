import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView, TextInput, Image,
} from 'react-native';

import { connect } from 'react-redux';

// import { Creators as AuthActions } from '../../store/reducers/auth';

import { Row } from '~/styles/global';

import {
  Label,
  Input,
  SimpleButtonLabel,
  SimpleLabel,
  Container,
  ErrorMessage,
  InputContainer,
} from './styles';

import { colors } from '~/styles/colors';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    emailErrors: '',
    passwordErrors: '',
    showEmailError: false,
    showPasswordError: false,
    securePassword2: true,
    visible: false,
  };


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        <Container
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
        >
          <Row marginTop={20} />
          <View
            style={{
              width: '100%',
            }}
          >
            <Label>Sign in</Label>
            <Input
              onChangeText={() => {}}
              placeholder="Usuário"
              autoCompleteType="email"
              textContentType="emailAddress"
              autoCorrect={false}
              spellCheck={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
              // error={showEmailError}
            />
            <InputContainer>
              <TextInput
                style={{ width: '90%', padding: 10 }}
                ref={(input) => {
                  this.secondTextInput = input;
                }}
                // onChangeText={}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry
                placeholder="Senha"
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={() => {
                  this.signIn();
                }}
                blurOnSubmit={false}
              />
              </InputContainer>
            </View>
            <Row />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
