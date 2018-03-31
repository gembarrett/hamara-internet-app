import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListItem, List, ScrollView, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Autolink from 'react-native-autolink';
import Icon from 'react-native-vector-icons/FontAwesome';
import { prefs } from '../routes/prefs.js';
import BasicText from './sub/basicText.js';
import { didyouknow } from '../content/didyouknow.js';
import { translatedText, translatedTitle, printLinks } from '../routes/shared.js';
import { globals } from '../styles/globals.js';
// import Pdf from 'react-native-pdf';

export default class DidYouKnowScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(didyouknow, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < didyouknow.length; i++) {
      if (didyouknow[i].links) {
        // change to print both
        for (let j=0; j < didyouknow[i].links.length; j++) {
          contentArr.push({
            key: i+j,
            text: translatedText(didyouknow[i].links, j)
          });
        }
      } else {
        contentArr.push({
          key: i,
          text: translatedText(didyouknow, i),
          icon: didyouknow[i].icon
        });
      }
    }
    return contentArr;
  }

  isSectionEnd(key) {
    if (key === 4 || key === 7 || key === 10 || key === 14) {
      return true;
    } else {
      return false;
    }
  }
  isSectionStart(key) {
    if (key === 1 || key === 5 || key === 8 || key === 11) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={globals.listItemContainer} style={[globals.base, globals.green]} >
      <FlatList
        data={this.content}
        renderItem={({item}) =>
          <View style={globals.whiteText, this.isSectionEnd(item.key) ? globals.lineBreak : null}>
            {item.icon && this.isSectionStart(item.key) ? <Icon name={item.icon}
              size={20}
              style={[globals.listIcon]} />
              : null }
            <Autolink linkStyle={globals.inlandLink}
              text={item.text}
              truncate={0}
              style={[globals.listItem, globals.whiteText, globals.para, prefs.language === 'pk' ? globals.pkFont : globals.enFont]} />
          </View> } />
      </ScrollView>
    );
  }
};
