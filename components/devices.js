import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import MenuText from './sub/menuText.js';
import { devices } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { translatedTitle, translatedText } from '../routes/shared.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';
import { menuStyles } from '../styles/menus.js';
import { icons } from '../content/images.js';

export default class DevicesScreen extends React.Component {
  static navigationOptions = {
    title: prefs.language === "pk" ? devices[0].textPK : devices[0].textEN,
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
                style={submenuStyles.button}><MenuText>{devices[i].textPK}</MenuText></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-1-en.png')}
                resizeMode="contain"
                style={submenuStyles.button}><MenuText>{devices[i].textEN}</MenuText></ImageBackground>}
            </TouchableOpacity>

        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[globals.green, globals.base, globals.menuButtons]}>
      <ImageBackground source={icons.devices.uri} style={globals.screenBg} resizeMode="cover">
        <View style={[submenuStyles.base]}>
          {this.buttons}
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
