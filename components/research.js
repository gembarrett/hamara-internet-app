import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { prefs } from '../routes/prefs.js';
import { research } from '../content/research.js';
import { translatedText, translatedTitle, printLinks } from '../routes/shared.js';
import { globals } from '../styles/globals.js';
import Autolink from 'react-native-autolink';

export default class ResearchScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(research, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < research.length; i++) {
      if (research[i].links) {
        contentArr.push(printLinks(research[i].links, 'yellow', 'download'));
      } else {
        contentArr.push(
          <View key = {i}>
          <Autolink linkStyle={globals.inlandLink} truncate={0} text={translatedText(research, i)}
              style={[prefs.language === 'pk' ? globals.pkFont : globals.enFont, globals.whiteText, globals.para]}/>
          </View>
        )
      }
    }
    return contentArr;
  }
  render() {
    return (
      <ScrollView style={[globals.green, globals.base]}>
          {this.content}
      </ScrollView>
    );
  }
};
