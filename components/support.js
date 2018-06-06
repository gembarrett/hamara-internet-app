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
            <View style={[globals.lineBreak, globals.para, {flexDirection: 'column', alignItems: 'flex-start'}]}>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <BasicText style={[globals.bold, {flex: 1}]} key={item.key}>
                  {item.key}
                </BasicText>
                <View style={[globals.orange, {alignSelf: 'flex-end', flex: 0, marginVertical: 10}]}>
                  <TouchableOpacity>
                    <Icon.Button style={[globals.orange]} name='phone' onPress={() => Linking.openURL(item.tel)}>
                      {item.text}
                    </Icon.Button>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <BasicText>
                  {item.desc}
                </BasicText>
              </View>

            </View>
          }
      />

      </ScrollView>
    );
  }
};
