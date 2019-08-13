import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: { header: null },
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login,
    App: AppStackNavigator,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  }
)
const Routes = createAppContainer(AppSwitchNavigator);

export default Routes;
