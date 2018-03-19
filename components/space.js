import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { space } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class SpaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your space',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < space.length; i++){
      const route = space[i].route;
      buttonsListArr.push(
        <View key = {space[i].id}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(space[i].route)}>
        {prefs.language === 'pk'
          ? <ImageBackground
            source={require('../assets/menu-button-4-pk.png')}
            resizeMode="contain"
            style={submenuStyles.button}><BasicText style={submenuStyles.text}>{space[i].textPK}</BasicText></ImageBackground>
          : <ImageBackground
            source={require('../assets/menu-button-4-en.png')}
            resizeMode="contain"
            style={submenuStyles.button}><BasicText style={submenuStyles.text}>{space[i].textEN}</BasicText></ImageBackground>}
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
