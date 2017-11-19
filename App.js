import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './components/menu';
import { prefs } from './routes/prefs.js'

class SplashScreen extends React.Component {
  goToMenu(lang) {
    prefs.language = lang;
    this.props.navigation.navigate('Menu');
  }
  render() {
    return (
      <View>
        <Button onPress={() => this.goToMenu('pk')} title="Urdu" />
        <Button onPress={() => this.goToMenu('en')} title="English" />
      </View>
    );
  }
}

const App = StackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu',
    },
  },
});

export default App;
