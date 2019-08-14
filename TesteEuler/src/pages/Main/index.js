import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Creators as FeedActions } from '~/store/ducks/feed';


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
  InputContainer,
} from './styles';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      escolas: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    const { conteudo } = this.props.auth;
    this.setState({
      escolas: conteudo,
    });
    this.arrayholder = conteudo;
  }

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.nomeAplicacao.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      escolas: newData,
    });
  };

  loadData = (contextUrl, token, imgUrl) => {

    const { requestFeed } = this.props;

    console.tron.log('euler', this.state);
    requestFeed(contextUrl, token, imgUrl);
  };

  render() {

    const { escolas } = this.state;
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
          <InputContainer>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <Icon
                style={{
                  marginHorizontal: 5,
                  alignSelf: 'center',
                }}
                name="ios-search"
                size={20}
                color="#9291b1"
                solid
              />
              <TextInput
                style={{
                  width: '90%', padding: 10, color: '#333', backgroundColor: '#fff',
                }}
                onChangeText={text => this.searchFilterFunction(text)}
                placeholder="Busca"
                placeholderTextColor="#333"
                autoCorrect={false}
                spellCheck={false}
                autoCapitalize="none"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
          </InputContainer>
          {escolas ? (
            <View>
              {escolas.map(item => (
                <ListItem onPress={() => {this.loadData(item.contexto, item.token, item.urlIconeContexto)}}>
                  <Avatar source={{ uri: item.urlIconeContexto }} />
                  <Content>
                    <Title>{item.nomeAplicacao}</Title>
                    <SubTitle>{item.contexto}</SubTitle>
                  </Content>
                  <Icon
                    style={{
                      marginHorizontal: 5,
                      alignSelf: 'center',
                    }}
                    name="ios-arrow-forward"
                    size={25}
                    color="#9291b1"
                    solid
                  />
                </ListItem>
              ))}
            </View>
          ) : (
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
          )}
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  requestFeed: (contextUrl, token, imgUrl) => dispatch(FeedActions.requestFeed(contextUrl, token, imgUrl)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
