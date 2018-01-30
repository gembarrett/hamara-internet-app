import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
            <Text style={globals.whiteText}>{translatedText(about, i)}</Text>
          </View>
        )
      }
    }
    return contentArr;
  }
  render() {
    return (
      <View style={[globals.base, globals.green]}>
        {this.content}
      </View>
    );
  }
};
