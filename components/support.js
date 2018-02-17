import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { translatedText, translatedTitle } from '../routes/shared.js';
import { support } from '../content/support.js';

export default class SupportScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(support, 0)
  };
  get content() {
    var contentArr = [];
    // var canCall = Linking.canOpenURL(support[1].number) ? true : false;
    for (let i = 1; i < support.length; i++) {
        var name = support[i].name;
        var number = support[i].number;
        var tel = 'tel:' + support[i].number;
        contentArr.push({key: name, text: number, tel: tel });
    }
    return contentArr;
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={this.content}
        renderItem={
          ({item}) =>
            <View>
              <Text key={item.key}>
                {item.key}
              </Text>
              <Text>
                {item.text}
              </Text>
              <Button title={'call ' + item.key} onPress={() => Linking.openURL(item.tel)}>
              </Button>
            </View>
          }
      />

      </ScrollView>
    );
  }
};
