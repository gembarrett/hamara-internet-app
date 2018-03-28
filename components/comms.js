import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import MenuText from './sub/menuText.js';
import { comms } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';
import { icons } from '../content/images.js';

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
                style={submenuStyles.button}><MenuText>{comms[i].textPK}</MenuText></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-3-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><MenuText>{comms[i].textEN}</MenuText></ImageBackground>}
            </TouchableOpacity>

        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    let imgSource = icons.comms.uri;
    return (
      <ScrollView contentContainerStyle={[globals.green, globals.base, globals.menuButtons]}>
      <ImageBackground source={imgSource} style={globals.screenBg} resizeMode="cover">
        <View style={[submenuStyles.base]}>
          {this.buttons}
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
