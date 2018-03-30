import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { prefs } from '../routes/prefs.js';
import { helpline } from '../content/helpline.js';
import { translatedText, translatedTitle, printLinks } from '../routes/shared.js';
import { globals } from '../styles/globals.js';
import Autolink from 'react-native-autolink';

export default class HelplineScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(helpline, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < helpline.length; i++) {
      if (helpline[i].links) {
        contentArr.push(printLinks(helpline[i].links, 'yellow', 'download'));
      } else {
        contentArr.push(
          <View key = {i}>
          <Autolink linkStyle={globals.inlandLink} truncate={0} text={translatedText(helpline, i)}
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
