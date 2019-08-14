import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import { Creators as AppActions } from '~/store/ducks/app';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Body,
  Title,
  Card,
  Content,
  Avatar,
  SubTitle,
  HeaderTitle,
  Placeholder,
  PlaceholderTitle,
  TimeSlot,
  ActionIcon,
  ListHeader,
} from './styles';


class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: 'Material Escolar',
          author: 'Professor EEM',
          day: '06/08',
          hour: '14:21',
          imageUrl: 'https://picsum.photos/200/300',
          icon: 'https://imgplaceholder.com/120x120/00a0d8/fff/ion-speakerphone',
          type: 'notification',
        },
        {
          title:
            'Relatorio de Acompanhamento Diário - Alice Lima - 31/07/2017 - Berçário B Vespertino',
          author: 'Coordenador',
          day: '06/08',
          hour: '14:21',
          imageUrl: '',
          icon: 'https://imgplaceholder.com/120x120/005a8f/fff/ion-ios-body',
          type: 'report',
        },
        {
          title: 'Inicio das Aulas',
          author: 'Professor EEM',
          day: '06/08',
          hour: '14:21',
          imageUrl: 'https://picsum.photos/500/600',
          icon: 'https://imgplaceholder.com/120x120/00a0d8/fff/ion-speakerphone',
          type: 'notification',
        },
      ],
    };
  }

  componentDidMount() {
    const { closeModal } = this.props;

    closeModal();

  }
  render() {
    console.tron.log('props', this.state);
    const { data } = this.state;
    return (
      <Container>
        <Header>
          <HeaderTitle>Selecione a sessão principal</HeaderTitle>
        </Header>
        <Body>
          {data.length > 0 ? (
            <View>
              {data.map(item => (
                <Card>
                  <ListHeader>
                    <ActionIcon source={{ uri: item.icon }} />
                    <Content>
                      <Title>{item.title}</Title>
                      <SubTitle>Por: {item.author}</SubTitle>
                    </Content>
                  <TimeSlot>12/12 14:04</TimeSlot>
                  </ListHeader>
                  {
                    item.type === 'notification' && <Avatar source={{ uri: item.imageUrl }} />
                  }
                </Card>
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
  closeModal: () => dispatch(AppActions.closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
