import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { translatedText, translatedTitle } from '../routes/shared.js';
import { support } from '../content/support.js';

export default class SupportScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(support, 0)
  };
  get content() {
    var contentArr = [];
    for (let i = 1; i < support.length; i++) {
        // change to print both
        var name = support[i].name;
        var number = support[i].number;
        contentArr.push({key: name, text: number });
    }
    return contentArr;
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={this.content}
        renderItem={({item}) => <Text>{item.key} - {item.text}</Text>}
      />

      </View>
    );
  }
};
