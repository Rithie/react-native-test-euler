import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { Types as FeedTypes } from '../ducks/feed';

import { requestPermission, requestFeed } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOG_IN_REQUEST, requestPermission),
    takeLatest(FeedTypes.REQUEST_FEED, requestFeed),
  ]);
}
