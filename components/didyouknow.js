import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListItem, List, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BasicText from './sub/basicText.js';
import { didyouknow } from '../content/didyouknow.js';
import { translatedText, translatedTitle } from '../routes/shared.js';
import { globals } from '../styles/globals.js';

export default class DidYouKnowScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(didyouknow, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < didyouknow.length; i++) {
      if (didyouknow[i].notes) {
        // change to print both
        for (let j=0; j < didyouknow[i].notes.length; j++) {
          var text = didyouknow[i].notes[0].textEN;
          contentArr.push({key: {j}+10, text: translatedText(didyouknow[i].notes, j) });
        }
      } else {
        contentArr.push({key: {i}, text: translatedText(didyouknow, i)});
      }
    }
    return contentArr;
  }
  render() {
    return (
      <ScrollView style={[globals.base, globals.green]} >
      <FlatList
        data={this.content}
        renderItem={({item}) => <BasicText>{item.text}</BasicText>}
      />
      </ScrollView>
    );
  }
};
