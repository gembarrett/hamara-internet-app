import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import BasicText from './sub/basicText.js';
import { about } from '../content/about.js';
import { translatedText, translatedTitle, printLinks, printGoals } from '../routes/shared.js';
import { globals } from '../styles/globals.js';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(about, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < about.length; i++) {
      if (about[i].goals) {
        contentArr.push(printGoals(about[i].goals));
      } else {
        contentArr.push(
          <View key = {i}>
            <BasicText style={[globals.whiteText, globals.textStyle]}>{translatedText(about, i)}</BasicText>
          </View>
        )
      }
    }
    return contentArr;
  }
  render() {
    return (
      <ScrollView style={[globals.base, globals.green]}>
        {this.content}
      </ScrollView>
    );
  }
};
