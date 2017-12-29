import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button } from 'react-native';
import { comms } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class CommsScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your communications',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < comms.length; i++){
      const route = comms[i].route;
      const text = prefs.language === 'pk' && comms[i].textPK ? comms[i].textPK : comms[i].textEN;
      buttonsListArr.push(
        <View key = {comms[i].id}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(comms[i].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-3-pk.png')}
                resizeMode="contain"
                style={submenuStyles.button}><Text style={submenuStyles.text}>{comms[i].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-3-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><Text style={submenuStyles.text}>{comms[i].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <View style={[globals.green, globals.base, globals.menu]}>
        <View style={[submenuStyles.base]}>
          {this.buttons}
        </View>
      </View>
    );
  }
}
