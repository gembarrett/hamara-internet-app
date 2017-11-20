import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './components/menu.js';
import { prefs } from './routes/prefs.js'
import OnlineScreen from './components/online.js';
import DevicesScreen from './components/devices.js';
import IdentityScreen from './components/identity.js';
import CommsScreen from './components/comms.js';
import SpaceScreen from './components/space.js';
import ReportScreen from './components/report.js';
import DidYouKnowScreen from './components/didyouknow.js';
import HelplineScreen from './components/helpline.js';
import AboutScreen from './components/about.js';
import SupportScreen from './components/support.js';

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
  Online: {
    screen: OnlineScreen,
  },
  Devices: {
    screen: DevicesScreen,
  },
  Identity: {
    screen: IdentityScreen,
  },
  Comms: {
    screen: CommsScreen,
  },
  Space: {
    screen: SpaceScreen,
  },
  Report: {
    screen: ReportScreen,
  },
  DidYouKnow: {
    screen: DidYouKnowScreen,
  },
  Helpline: {
    screen: HelplineScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Support: {
    screen: SupportScreen,
  }
});

export default App;
