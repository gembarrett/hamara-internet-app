import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { translatedText } from '../routes/shared.js';
import { menuStyles } from '../styles/openingpages.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }

// TODO: keep fingers crossed that eventually React Native will support dynamic local images
  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      const route = lvl1Nav[i].route;
      const text = prefs.language === 'pk' && lvl1Nav[i].textPK ? lvl1Nav[i].textPK : lvl1Nav[i].textEN;
      const file = './assets/menu-button-' + i + '.png';
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[i].route)}>
            <ImageBackground
              source={require('../assets/menu-button-0.png')}
              resizeMode="contain"
              style={menuStyles.button}>
               <Text style={menuStyles.text}>{text}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    }
    return buttonsListArr;
  }


  render() {
    const logo1 = "../assets/menu-logo-0.png";
    return (
      <View style={[globals.green, globals.base, menuStyles.base]}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[0].route)}>
          <ImageBackground
            source={require('../assets/menu-button-0.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 0)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[1].route)}>
          <ImageBackground
            source={require('../assets/menu-button-1.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 1)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[2].route)}>
          <ImageBackground
            source={require('../assets/menu-button-2.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 2)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[3].route)}>
          <ImageBackground
            source={require('../assets/menu-button-3.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 3)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[4].route)}>
          <ImageBackground
            source={require('../assets/menu-button-4.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 4)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[5].route)}>
          <ImageBackground
            source={require('../assets/menu-button-5.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 5)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[6].route)}>
          <ImageBackground
            source={require('../assets/menu-button-6.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 6)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[7].route)}>
          <ImageBackground
            source={require('../assets/menu-button-7.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 7)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[8].route)}>
          <ImageBackground
            source={require('../assets/menu-button-8.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 8)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[9].route)}>
          <ImageBackground
            source={require('../assets/menu-button-9.png')}
            resizeMode="contain"
            style={menuStyles.button}>
             <Text style={menuStyles.text}>{translatedText(lvl1Nav, 9)}</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={[menuStyles.container]}>
          <Image resizeMode="contain" source={require("../assets/menu-logo-0.png")} style={menuStyles.logo} />
          <Image resizeMode="contain" source={require("../assets/menu-logo-1.png")} style={menuStyles.logo} />
          <Image resizeMode="contain" source={require("../assets/menu-logo-2.png")} style={menuStyles.logo} />
        </View>
      </View>
    );
  }
}
