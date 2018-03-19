import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import MenuText from './sub/menuText.js';
import { identity } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';

export default class IdentityScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your identity',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < identity.length; i++){
      const route = identity[i].route;
      const text = prefs.language === 'pk' && identity[i].textPK ? identity[i].textPK : identity[i].textEN;
      buttonsListArr.push(
        <View key = {identity[i].id}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(identity[i].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-2-pk.png')}
                resizeMode="contain"
                style={submenuStyles.button}><MenuText>{identity[i].textPK}</MenuText></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-2-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><MenuText>{identity[i].textEN}</MenuText></ImageBackground>}
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
