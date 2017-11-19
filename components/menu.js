import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnlineScreen from './online';
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


export default class MenuScreen extends React.Component {
  get buttons() {
    console.log(lvl1Nav);
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <Button
            title={lvl1Nav[i].text}
            onPress={() => navigate('Menu')}>
              {lvl1Nav[i].text}
          </Button>
        </View>
      )
    }
    return buttonsListArr;
  };

  static navigationOptions = {
    title: 'Profile',
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
