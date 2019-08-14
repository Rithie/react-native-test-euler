import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';
import feed from './feed';

const reducers = combineReducers({
  auth,
  app,
  feed
});

export default reducers;
