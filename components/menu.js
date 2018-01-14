import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { translatedText } from '../routes/shared.js';
import { menuStyles } from '../styles/openingpages.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }


  onPressImage(num) {
    const links=['https://hamarainternet.org/', 'https://digitalrightsfoundation.pk/', 'http://www.makingallvoicescount.org/project/hamara-internet/'];
    return Linking.openURL(links[num]);
  }

  // TODO: keep fingers crossed that eventually React Native will support dynamic local images
  render() {
    return (
      <View style={[globals.green, globals.base]}>
        <View style={menuStyles.base}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[0].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-0-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[0].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-0-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[0].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[1].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-1-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[1].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-1-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[1].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[2].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-2-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[2].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-2-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[2].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[3].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-3-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[3].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-3-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[3].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[4].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-4-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[4].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-4-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[4].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[5].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-5-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[5].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-5-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[5].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[6].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-6-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[6].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-6-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[6].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[7].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-7-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[7].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-7-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[7].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[8].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-8-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[8].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-8-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[8].textEN}</Text></ImageBackground>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[9].route)}>
            {prefs.language === 'pk'
              ? <ImageBackground
                source={require('../assets/menu-button-9-pk.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[9].textPK}</Text></ImageBackground>
              : <ImageBackground
                source={require('../assets/menu-button-9-en.png')}
                resizeMode="contain"
                style={menuStyles.button}><Text style={menuStyles.text}>{lvl1Nav[9].textEN}</Text></ImageBackground>}
            </TouchableOpacity>
        </View>
        <View style={[menuStyles.container]}>
            <TouchableOpacity onPress={() => {this.onPressImage(0)}}>
              <Image resizeMode="contain" source={require("../assets/menu-logo-0.png")} style={menuStyles.logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.onPressImage(1)}}>
              <Image resizeMode="contain" source={require("../assets/menu-logo-1.png")} style={menuStyles.logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.onPressImage(2)}}>
              <Image resizeMode="contain" source={require("../assets/menu-logo-2.png")} style={menuStyles.logo} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
