import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { online } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class OnlineScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting yourself online',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < online.length; i++){
      const route = online[i].route;
      const text = prefs.language === 'pk' && online[i].textPK ? online[i].textPK : online[i].textEN;
      buttonsListArr.push(
        <View key = {online[i].id} style={[globals.orange, submenuStyles.button]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(online[i].route)}>
            <Text style={globals.whiteText}>{text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <View style={[globals.green, globals.base, submenuStyles.buttons]}>
        {this.buttons}
      </View>
    );
  }
}
