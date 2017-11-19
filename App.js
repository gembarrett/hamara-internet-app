import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './components/menu';

class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <Button onPress={() => this.props.navigation.navigate('Menu')} title="Go to menu" />
    );
  }
}

const App = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: 'Splash',
    },
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu',
    },
  },
});

export default App;
