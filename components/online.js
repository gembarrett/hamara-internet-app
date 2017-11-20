import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { online } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';

export default class OnlineScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting yourself online',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < online.length; i++){
      const route = online[i].route;
      const text = prefs.language === 'pk' && online[i].textPK ? online[i].textPK : online[i].textEN;
      buttonsListArr.push(
        <View key = {online[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(online[i].route)} />
        </View>
      )
    }
    return buttonsListArr;
  }

  render() {
    return (
      <View>
        {this.buttons}
      </View>
    );
  }
}
