import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListItem, List } from 'react-native';
import { StackNavigator } from 'react-navigation';
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
        console.log(didyouknow[i].notes);
      } else {
        contentArr.push({key: {i}, text: translatedText(didyouknow, i)});
      }
    }
    return contentArr;
  }
  render() {
    return (
      <View style={[globals.base, globals.green]}>
        <FlatList
          data={this.content}
          renderItem={({item}) => <Text style={globals.whiteText}>{item.text}</Text>}
        />
      </View>
    );
  }
};
