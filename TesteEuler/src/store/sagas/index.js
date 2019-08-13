import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';

import { requestPermission } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOG_IN_REQUEST, requestPermission
  )]);
}
