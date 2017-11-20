import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { comms } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';

export default class CommsScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your communications',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < comms.length; i++){
      const route = comms[i].route;
      const text = prefs.language === 'pk' && comms[i].textPK ? comms[i].textPK : comms[i].textEN;
      buttonsListArr.push(
        <View key = {comms[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(comms[i].route)} />
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
