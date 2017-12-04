import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { helpline } from '../content/helpline.js';
import { translatedText, translatedTitle, printLinks } from '../routes/shared.js';

export default class HelplineScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(helpline, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < helpline.length; i++) {
      if (helpline[i].links) {
        contentArr.push(printLinks(helpline[i].links));
      } else {
        contentArr.push(
          <View key = {i}>
            <Text>{translatedText(helpline, i)}</Text>
          </View>
        )
      }
    }
    return contentArr;
  }
  render() {
    return (
      <View>
        {this.content}
      </View>
    );
  }
};
