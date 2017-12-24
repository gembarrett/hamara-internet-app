import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { menuStyles } from '../styles/openingpages.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }

  getNames(limit) {
    var namesArr = [];
    for (let i = 0; i < limit; i++){
      const file = '../assets/menu-button-' + i + '.png';
      namesArr.push(file);
    }
    return namesArr;
  }
// TODO: find some way to do dynamic local images, this code is ugly
  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      const route = lvl1Nav[i].route;
      const text = prefs.language === 'pk' && lvl1Nav[i].textPK ? lvl1Nav[i].textPK : lvl1Nav[i].textEN;
      const file = './assets/menu-button-' + i + '.png';
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[i].route)}>
            {
              switch (i){
                case '0':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-0.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '1':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-1.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '2':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-2.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '3':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-3.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '4':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-4.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '5':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-5.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '6':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-6.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '7':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-7.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '8':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-8.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );
                case '9':
                  return (
                    <ImageBackground
                      source={require('../assets/menu-button-9.png')}
                      resizeMode="contain"
                      style={menuStyles.button}>
                       <Text style={menuStyles.text}>{text}</Text>
                    </ImageBackground>
                    );

                  }
            }
          </TouchableOpacity>
        </View>
      )
    }
    return buttonsListArr;
  }


  render() {
    return (
      <View style={[globals.green, globals.base, menuStyles.base]}>
        {this.buttons}
        <View style={[menuStyles.container]}>
          <Image source={require("../assets/menu-logo-0.png")} style={menuStyles.logo} />
          <Image source={require("../assets/menu-logo-1.png")} style={menuStyles.logo} />
          <Image source={require("../assets/menu-logo-2.png")} style={menuStyles.logo} />
        </View>
      </View>
    );
  }
}
