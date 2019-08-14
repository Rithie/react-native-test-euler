import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import NavigationService from './NavigationService';

import Routes from '~/routes';
import LoadingModal from './components/LoadingModal';

const App = () => (
  <Provider store={store}>
    <LoadingModal />
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
