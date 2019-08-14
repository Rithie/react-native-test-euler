import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { View, Text } from 'react-native';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Menu from '~/pages/Menu';
import News from '~/pages/News';
import Profile from '~/pages/Profile';
import Write from '~/pages/Write';
import Driving from '~/pages/Driving';

import Ionicons from 'react-native-vector-icons/Ionicons';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'News') {
    iconName = 'md-paper';
  }
  if (routeName === 'Write') {
    iconName = 'md-create';
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  }
  if (routeName === 'Menu') {
    iconName = 'md-apps';
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  }
  if (routeName === 'Driving') {
    iconName = 'ios-car';
  }
  else if (routeName === 'Profile') {
    iconName = 'md-person';
        // We want to add badges to home tab icon
        IconComponent = HomeIconWithBadge;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppTabNavigator =  createBottomTabNavigator(
  {
    News: { screen: News },
    Write: { screen: Write },
    Menu: { screen: Menu },
    Driving: { screen: Driving },
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
    getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#005990',
      inactiveTintColor: '#9a9a9a',
    },
  }
)
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: { header: null },
  },
  Tabs: {
    screen: AppTabNavigator,
    navigationOptions: { header: null },
  }
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login,
    App: AppStackNavigator,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)
const Routes = createAppContainer(AppSwitchNavigator);

export default Routes;
