import React, { Component } from 'react';
import {
  StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import { Creators as AuthActions } from '~/store/ducks/auth';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Label,
  SimpleLabel,
  SolidButton,
  Container,
  SimpleButtonLabel,
  InputContainer,
  OutlineButton,
  Header,
  Row,
} from './styles';



class Login extends Component {
  state = {
    usuario: '',
    password: '',
    securePassword: true,
    visible: false,
    showUsuarioError: false,
    showPasswordError: false,
    passwordErrors: '',
    emailErrors: '',
  };

  revealPassword = () => {
    const { securePassword } = this.state;
    this.setState({
      securePassword: !securePassword,
    });
  };

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  };

  onChangeUsuario = (usuario) => {
    this.setState({
      usuario,
    });
  };

  signIn = () => {
    const { usuario, password } = this.state;
    const { logInRequest } = this.props;

    if (!usuario) {
      this.setState({
        showusuarioError: true,
        usuarioErrors: 'This field is required.',
      });
      return false;
    }
    this.setState({
      showusuarioError: false,
      usuarioErrors: '',
    });

    if (!password) {
      this.setState({
        showPasswordError: true,
        passwordErrors: 'This field is required.',
      });
      return false;
    }
    this.setState({
      showPasswordError: false,
      passwordErrors: '',
    });

    const { navigate } = this.props.navigation;

    // navigate('App');
    console.tron.log(this.state);

    logInRequest(usuario, password);
  };


  render() {
    const { securePassword, showUsuarioError } = this.state;
    return (
      <LinearGradient colors={['#009ca0', '#0087a3', '#006da5']} style={{ flex: 1 }}>
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
            <Header>
              <Icon
                style={{
                  margin: 5,
                  opacity: 0.8,
                }}
                name="chevron-left"
                size={25}
                color="#fff"
                solid
              />
              <View />
                <FontAwesome
                  style={{
                    margin: 5,
                    opacity: 0.8,
                  }}
                  name="question-circle-o"
                  size={25}
                  color="#fff"
                  solid
                />
            </Header>
            <View
              style={{
                width: '100%',
              }}
            >
              <Label>Informe o usuário e a senha encaminhados pela escola</Label>
              <Row>
              <InputContainer borderRadiusTop>
                <Icon
                  style={{
                    margin: 5,
                    opacity: 0.8,
                  }}
                  name="user"
                  size={16}
                  color="#f9f9f9"
                  solid
                />
                <TextInput
                  style={{ width: '90%', padding: 10, color: '#fff' }}
                  ref={(input) => {
                    this.secondTextInput = input;
                  }}
                  onChangeText={this.onChangeUsuario}
                  placeholder="Usuário"
                  placeholderTextColor="#fff"
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
                  error={showUsuarioError}
                />
              </InputContainer>
              <InputContainer borderRadiusBottom noBorder>
                <Icon
                  style={{
                    margin: 5,
                    opacity: 0.8,
                  }}
                  name="key"
                  size={16}
                  color="#f9f9f9"
                  solid
                />
                <TextInput
                  style={{ width: '80%', padding: 10, color: '#fff' }}
                  ref={(input) => {
                    this.secondTextInput = input;
                  }}
                  onChangeText={this.onChangePassword}
                  autoCompleteType="password"
                  textContentType="password"
                  secureTextEntry={securePassword}
                  placeholder="Senha"
                  placeholderTextColor="#fff"
                  autoCapitalize="none"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    this.signIn();
                  }}
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                onPress={() => {
                  this.revealPassword();
                }}
              >
                {securePassword ? (
                  <FontAwesome
                  style={{
                    margin: 5,
                    opacity: 0.8,
                  }}
                  name="eye"
                  size={16}
                  color="#f9f9f9"
                  solid
                  />
                ) : (
                  <FontAwesome
                  style={{
                    margin: 5,
                    opacity: 0.8,
                  }}
                  name="eye-slash"
                  size={16}
                  color="#f9f9f9"
                  solid
                  />
                )}
              </TouchableOpacity>
              </InputContainer>
              </Row>
              <SolidButton
                onPress={() => {
                  this.signIn();
                }}
              >
                <SimpleLabel color="#0087a3">Entrar</SimpleLabel>
              </SolidButton>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => {}}>
                  <SimpleButtonLabel>Esqueci a minha senha</SimpleButtonLabel>
                </TouchableOpacity>
                <View style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: 'white' }} />
                <TouchableOpacity onPress={() => {}}>
                  <SimpleButtonLabel>Politica de Privacidade</SimpleButtonLabel>
                </TouchableOpacity>
              </View>
            </View>

            <OutlineButton>
              <FontAwesome
                style={{
                  margin: 5,
                }}
                name="mobile-phone"
                size={25}
                color="#f9f9f9"
                solid
              />
              <SimpleLabel color="#fff">Entrar com celular</SimpleLabel>
              <View />
            </OutlineButton>
          </Container>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logInRequest: (login, password) => dispatch(AuthActions.logInRequest(login, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
