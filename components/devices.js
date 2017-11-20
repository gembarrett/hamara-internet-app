import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { devices } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';

export default class DevicesScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your devices',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < devices.length; i++){
      const route = devices[i].route;
      const text = prefs.language === 'pk' && devices[i].textPK ? devices[i].textPK : devices[i].textEN;
      buttonsListArr.push(
        <View key = {devices[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(devices[i].route)} />
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
