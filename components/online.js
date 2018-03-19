import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { online } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class OnlineScreen extends React.Component {
  // TODO use translatedTitle here
  static navigationOptions = {
    title: 'Protecting yourself online',
  }
  // TODO refactor into shared function
  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < online.length; i++){
      const route = online[i].route;
      buttonsListArr.push(
        <View key = {online[i].id}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(online[i].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-0-pk.png')}
                resizeMode="contain"
                style={submenuStyles.button}><BasicText style={submenuStyles.text}>{online[i].textPK}</BasicText></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-0-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><BasicText style={submenuStyles.text}>{online[i].textEN}</BasicText></ImageBackground>}
            </TouchableOpacity>

        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[globals.green, globals.base, globals.menuButtons]}>
        <View style={[submenuStyles.base]}>
          {this.buttons}
        </View>
      </ScrollView>
    );
  }
}
