import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnlineScreen from './online.js';
import DevicesScreen from './devices.js';
import IdentityScreen from './identity.js';
import CommsScreen from './comms.js';
import SpaceScreen from './space.js';
import ReportScreen from './report.js';
import DidYouKnowScreen from './didyouknow.js';
import HelplineScreen from './helpline.js';
import AboutScreen from './about.js';
import SupportScreen from './support.js';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js'


export default class MenuScreen extends React.Component {
  goToMenu(route) {
    console.log(route);
    this.props.navigation.navigate(route);
  }
  static navigationOptions = {
    title: 'Menu',
  };

  get buttons() {
    console.log('current lang is', prefs.language);
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      console.log(lvl1Nav[i].route);
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <Button
            title={lvl1Nav[i].text}
            onPress={() => this.goToMenu(lvl1Nav[i].route)}>
              {lvl1Nav[i].text}
          </Button>
        </View>
      )
    }
    return buttonsListArr;
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        {this.buttons}
      </View>
    )
  };
}

const MenuNav = StackNavigator({
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
