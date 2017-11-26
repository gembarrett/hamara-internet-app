import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { identity } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';

export default class IdentityScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your identity',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < identity.length; i++){
      const route = identity[i].route;
      const text = prefs.language === 'pk' && identity[i].textPK ? identity[i].textPK : identity[i].textEN;
      buttonsListArr.push(
        <View key = {identity[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(identity[i].route)} />
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
