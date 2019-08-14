import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as AuthActions } from '~/store/ducks/auth';
import { Creators as AppActions } from '~/store/ducks/app';

import navigation from '~/NavigationService';

export function* requestPermission(action) {
  const { login, password } = action.payload;

  const form = {
    login,
    senha: password,
    nomeApp: 'br.com.eem.teste',
    versaoApp: '10',
    versaoSO: '10',
    idDispositivo: 'teste-mobile',
  };
  try {
    const response = yield call(api.post, '/Acesso/login', JSON.stringify(form), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(AuthActions.logInSuccess(response.data.conteudo));
    navigation.navigate('App');
  } catch (error) {
    console.tron.log('err', error);
    yield put(AuthActions.logInFailure(error));
  }
}

export function* requestFeed(action) {
  const { contextUrl, token, imgUrl } = action.payload;

  yield put(AppActions.openModal(imgUrl));

  // simula api request

  yield setTimeout(() => {
    navigation.navigate('Tabs');
  }, 5000);

  // Eu estava com problemas no retorno da api, mesmo utilizando clientes REST
  // como CURL e Insomnia, eu faria algo assim com essa chamada, semelhante à tela
  // de login.

  // const apiUrl = `http://${contextUrl}`;

  // try {
  //   const response = yield call(apiUrl.post, '/api/mensagem/ultimas-noticias/v3', null, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Authorization': `${token}`,
  //     },
  //   });

  //   yield put(AppActions.openModal(respons.data));
  //   navigation.navigate('Tabs');
  // } catch (error) {
  //   yield put(AuthActions.logInFailure(error));
  // }
}
