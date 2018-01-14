import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button } from 'react-native';
import { devices } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { translatedTitle, translatedText } from '../routes/shared.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class DevicesScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your devices',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < devices.length; i++){
      const route = devices[i].route;
      text = translatedText(devices, i);
      buttonsListArr.push(
        <View key = {devices[i].id}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(devices[i].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-1-pk.png')}
                resizeMode="contain"
                style={submenuStyles.button}><Text style={submenuStyles.text}>{devices[i].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-1-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><Text style={submenuStyles.text}>{devices[i].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <View style={[globals.green, globals.base]}>
        <View style={[submenuStyles.base]}>
          {this.buttons}
        </View>
      </View>
    );
  }
}
