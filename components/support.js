import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, ScrollView, TouchableOpacity } from 'react-native';
import BasicText from './sub/basicText.js';
import { StackNavigator } from 'react-navigation';
import { translatedText, translatedTitle } from '../routes/shared.js';
import { support } from '../content/support.js';
import { globals } from '../styles/globals.js';
import { prefs } from '../routes/prefs.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SupportScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(support, 0),
    headerTransparent: true,
    headerStyle: {
      backgroundColor: '#F69731'
    },
    headerTintColor: '#FFF'
  };
  get content() {
    var contentArr = [];
    // var canCall = Linking.canOpenURL(support[1].number) ? true : false;
    for (let i = 1; i < support.length; i++) {
        var name = support[i].name;
        var number = support[i].number;
        var tel = 'tel:' + support[i].number;
        var desc = prefs.language === 'pk' ? support[i].descPK : support[i].descEN;
        contentArr.push({key: name, text: number, tel: tel, desc: desc});
    }
    return contentArr;
  }
  render() {
    return (
      <ScrollView style={[globals.base, globals.green]}>
      <FlatList
        data={this.content}
        renderItem={
          ({item}) =>
            <View style={[globals.lineBreak, globals.para, {flexDirection: 'row', justifyContent: 'space-between'}]}>
              <View>
                <BasicText style={[globals.bold, {alignSelf: 'flex-start'}]} key={item.key}>
                  {item.key}
                </BasicText>
                <BasicText style={{alignSelf: 'flex-start'}}>
                  {item.text}
                </BasicText>
                <BasicText>
                  {item.desc}
                </BasicText>
              </View>
              <TouchableOpacity>
                <Icon.Button name='phone' style={[globals.orange]}  onPress={() => Linking.openURL(item.tel)} />
              </TouchableOpacity>
            </View>
          }
      />

      </ScrollView>
    );
  }
};
