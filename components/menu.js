import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { menuStyles } from '../styles/openingpages.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      const route = lvl1Nav[i].route;
      const text = prefs.language === 'pk' && lvl1Nav[i].textPK ? lvl1Nav[i].textPK : lvl1Nav[i].textEN;
      const file = './assets/menu-button-' + i + '.png';
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[i].route)}>
          <ImageBackground
             source={{ uri: './assets/menu-button-1.png' }} style={{width: '100%', height: 50}}>
             <Text>{text}</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <View style={[globals.green, globals.base]}>
        {this.buttons}
      </View>
    );
  }
}
