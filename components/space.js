import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Button, ScrollView } from 'react-native';
import MenuText from './sub/menuText.js';
import { space } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { submenuStyles } from '../styles/submenus.js';
import { icons } from '../content/images.js';

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
            style={submenuStyles.button}><MenuText>{space[i].textPK}</MenuText></ImageBackground>
          : <ImageBackground
            source={require('../assets/menu-button-4-en.png')}
            resizeMode="contain"
            style={submenuStyles.button}><MenuText>{space[i].textEN}</MenuText></ImageBackground>}
        </TouchableOpacity>
        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    let imgSource = icons.space.uri;
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
