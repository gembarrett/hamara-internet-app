import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
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
        var name = support[i].name;
        var number = support[i].number;
        contentArr.push({key: name, text: number });
    }
    return contentArr;
  }
  number(num) {
    var tel = 'tel:';
    // if (Linking.canOpenURL(num)) {
      tel = tel + num;
      return tel;
    // } else {
    //   return null;
    // }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={this.content}
        renderItem={
          ({item}) =>
            <View>
              <Text key={item.key}>
                {item.key} - {item.text}
              </Text>
              <Text>
              {this.number(item.text)}
              </Text>
              <Button title="call {item.key}" onPress={() => 'tel:+14379814406'}>
              </Button>
            </View>
          }
      />

      </View>
    );
  }
};
