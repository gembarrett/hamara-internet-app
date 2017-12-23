import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
import SupportScreen from './components/support.js';
import AboutScreen from './components/four/about.js';
import BackupsScreen from './components/four/backups.js';
import ChatScreen from './components/four/chat.js';
import CyberScreen from './components/four/cyber.js';
import HarassmentScreen from './components/four/harassment.js';
import LocationScreen from './components/four/location.js';
import SearchScreen from './components/four/search.js';
import SocialScreen from './components/four/social.js';
import USBScreen from './components/four/usbs.js';
import VirusScreen from './components/four/virus.js';
import BrowsersScreen from './components/four/browsers.js';
import PasswordScreen from './components/four/passwords.js';
import TwoFAScreen from './components/four/twofa.js';
import { globals } from './styles/globals.js';
import { splashStyles } from './styles/openingpages.js';

class SplashScreen extends React.Component {
  goToMenu(lang) {
    prefs.language = lang;
    this.props.navigation.navigate('Menu');
  }
  render() {
    return (
      <View style={[globals.green, globals.base, splashStyles.base]}>
        <Image resizeMode="contain" style={splashStyles.logo} source={require('./assets/splash-logo.png')} />
        <Button style={splashStyles.button} onPress={() => this.goToMenu('pk')} title="Urdu" />
        <Button style={splashStyles.button} onPress={() => this.goToMenu('en')} title="English" />
        <Image resizeMode="contain" style={splashStyles.image} source={require('./assets/splash-lady.png')} />
      </View>
    );
  }
}

const App = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu',
    }
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
  },
  Cyber: {
    screen: CyberScreen,
  },
  Harassment: {
    screen: HarassmentScreen,
  },
  USBs: {
    screen: USBScreen,
  },
  Virus: {
    screen: VirusScreen,
  },
  Backups: {
    screen: BackupsScreen,
  },
  Location: {
    screen: LocationScreen,
  },
  Social: {
    screen: SocialScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Browsers: {
    screen: BrowsersScreen,
  },
  Passwords: {
    screen: PasswordScreen,
  },
  TwoFA: {
    screen: TwoFAScreen,
  }
});

export default App;
