import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { helpline } from '../content/helpline.js';
import { translatedText, translatedTitle, printLinks } from '../routes/shared.js';
import { globals } from '../styles/globals.js';

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
            <BasicText isParagraph>{translatedText(helpline, i)}</BasicText>
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
