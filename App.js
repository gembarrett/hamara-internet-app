import React from 'react';
import { StyleSheet, Text, View, Button, Image, I18nManager } from 'react-native';
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
import AboutScreen from './components/about.js';
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
import {lvl1Nav} from './routes/lvl1.js';
import BasicButton from './components/sub/basicButton.js';

class SplashScreen extends React.Component {
  goToMenu = (lang) => {
    prefs.language = lang;
    console.log(I18nManager.isRTL, lang);
    if (lang === 'pk') {
      I18nManager.isRTL = true;
      console.log(I18nManager.isRTL);
    } else {
      I18nManager.isRTL = false;
      console.log(I18nManager.isRTL);
    };
    this.props.navigation.navigate('Menu');
  }
  render() {
    I18nManager.isRTL = false;
    prefs.language = 'en';
    return (
      <View style={[globals.green, globals.base, globals.menuButtons, splashStyles.base]}>
        <Image resizeMode="contain" style={splashStyles.logo} source={require('./assets/splash-logo.png')} />
        <View style={splashStyles.buttons}>
          <BasicButton accessibilityLabel="Button for English language content"
            style={splashStyles.button}
            text="English"
            onPress={() => this.goToMenu('en')} title="English" />
          <BasicButton accessibilityLabel="Button for Urdu language content"
            style={splashStyles.button}
            text="Urdu"
            onPress={() => this.goToMenu('pk')} title="Urdu" />
        </View>
        <Image resizeMode="contain" style={splashStyles.image} source={require('./assets/splash-lady.png')} />
      </View>
    );
  }
}

// TODO: refactor so colours are pulled from styles
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
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#7DC242',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Online: {
    screen: OnlineScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Devices: {
    screen: DevicesScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Identity: {
    screen: IdentityScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#ED1651',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Comms: {
    screen: CommsScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Space: {
    screen: SpaceScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Report: {
    screen: ReportScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#ED1651',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  DidYouKnow: {
    screen: DidYouKnowScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Helpline: {
    screen: HelplineScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#ED1651',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Support: {
    screen: SupportScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Cyber: {
    screen: CyberScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Harassment: {
    screen: HarassmentScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  USBs: {
    screen: USBScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Virus: {
    screen: VirusScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Backups: {
    screen: BackupsScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#E6D228',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Social: {
    screen: SocialScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Browsers: {
    screen: BrowsersScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#F69731',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  Passwords: {
    screen: PasswordScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#ED1651',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  },
  TwoFA: {
    screen: TwoFAScreen,
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: '#ED1651',
        elevation: 0
      },
      headerTintColor: '#FFF'
    }
  }
});

export default App;
