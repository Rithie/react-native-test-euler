import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as AuthActions } from '~/store/ducks/auth';
import navigation from '~/NavigationService';

export function* requestPermission(action){
  const { login, password } = action.payload;

  const form = {
    login,
    senha: password,
    nomeApp: "br.com.eem.teste",
    versaoApp: "10",
    versaoSO: "10",
    idDispositivo: "teste-mobile"
  }
  try {
    const response = yield call(api.post, '/Acesso/login', JSON.stringify(form), {
      headers: {
          'Content-Type': 'application/json'
      }
  });
  yield put(AuthActions.logInSuccess(response.data.conteudo));
  navigation.navigate('App')

  } catch (error) {
    console.tron.log('err', error)
    yield put(AuthActions.logInFailure(error));
  }
}
