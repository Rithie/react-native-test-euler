import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Creators as AuthActions } from '~/store/ducks/auth';
import { connect } from 'react-redux';

import {
  Container,
  Header,
  Body,
  Title,
  ListItem,
  Content,
  Avatar,
  SubTitle,
  HeaderTitle,
  Placeholder,
  PlaceholderTitle,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

class Main extends Component {

  render() {
    console.tron.log('props', this.props.auth)
    const { conteudo } = this.props.auth;
    return (
        <Container>
          <Header>
            <Icon
              style={{
                marginHorizontal: 5,
              }}
              name="ios-arrow-back"
              size={25}
              color="#fff"
              solid
            />
            <HeaderTitle>Selecione a sessão principal</HeaderTitle>
            <View />
          </Header>
          <Body>
            { conteudo ? (
              <View>
                {
                  conteudo.map(item => (
                    <ListItem>
                  <Avatar source={{uri: item.urlIconeContexto}} />
                  <Content>
                    <Title>{item.nomeAplicacao}</Title>
                    <SubTitle>{item.contexto}</SubTitle>
                  </Content>
                  <Icon
                  style={{
                    marginHorizontal: 5,
                    alignSelf: 'center'
                  }}
                  name="ios-arrow-forward"
                  size={25}
                  color="#9291b1"
                  solid
                />
                </ListItem>
                  ))
                }
                </View>
              )
              :
              <Placeholder>
                <Icon
                  style={{
                    marginVertical: 15,
                  }}
                  name="md-sad"
                  size={25}
                  color="#222"
                  solid
                />
                <PlaceholderTitle>Ainda não existe escolas cadastradas.</PlaceholderTitle>
              </Placeholder>
            }
          </Body>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);
