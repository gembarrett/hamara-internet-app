import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, Linking, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import MenuText from './sub/menuText.js';
import { lvl1Nav } from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';
import { globals } from '../styles/globals.js';
import { translatedText } from '../routes/shared.js';
import { menuStyles } from '../styles/menus.js';
import { submenuStyles } from '../styles/submenus.js';
import { menu } from '../content/images.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: '',
  }

  onPressImage(num) {
    const links=['https://hamarainternet.org/', 'https://digitalrightsfoundation.pk/', 'http://www.makingallvoicescount.org/project/hamara-internet/'];
    return Linking.openURL(links[num]);
  }

  // TODO: apply this to all buttons
  get buttonPic() {
    // let el = menu[section][prefs.language]
    let imgSource = menu.online[prefs.language];
    return imgSource;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[globals.green, globals.base, globals.menuButtons]}>
        <View style={[menuStyles.base]}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[0].route)}>
                <ImageBackground
                  source={this.buttonPic}
                  resizeMode="contain"
                  style={menuStyles.button}>
                  <MenuText>
                    {prefs.language === "pk" ? lvl1Nav[0].textPK : lvl1Nav[0].textEN}
                  </MenuText>
                </ImageBackground>

              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[1].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-1-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[1].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-1-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[1].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[2].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-2-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[2].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-2-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[2].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[3].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-3-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[3].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-3-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[3].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[4].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-4-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[4].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-4-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[4].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[5].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-5-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[5].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-5-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[5].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[6].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-6-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[6].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-6-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[6].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[7].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-7-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[7].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-7-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[7].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[8].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-8-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[8].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-8-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[8].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(lvl1Nav[9].route)}>
              {prefs.language === 'pk'
                ? <ImageBackground
                  source={require('../assets/menu-button-9-pk.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[9].textPK}</MenuText></ImageBackground>
                : <ImageBackground
                  source={require('../assets/menu-button-9-en.png')}
                  resizeMode="contain"
                  style={menuStyles.button}><MenuText>{lvl1Nav[9].textEN}</MenuText></ImageBackground>}
              </TouchableOpacity>
            </View>
            <View style={[menuStyles.container]}>
                <TouchableOpacity style={menuStyles.logoTouch} onPress={() => {this.onPressImage(0)}}>
                  <Image resizeMode="contain" source={require("../assets/menu-logo-0.png")}  style={menuStyles.logo} />
                </TouchableOpacity>
                <TouchableOpacity style={menuStyles.logoTouch} onPress={() => {this.onPressImage(1)}}>
                  <Image resizeMode="contain" source={require("../assets/menu-logo-1.png")}  style={menuStyles.logo} />
                </TouchableOpacity>
                <TouchableOpacity style={menuStyles.logoTouch} onPress={() => {this.onPressImage(2)}}>
                  <Image resizeMode="contain" source={require("../assets/menu-logo-2.png")}  style={menuStyles.logo} />
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }
}
