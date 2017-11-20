import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {lvl1Nav} from '../routes/lvl1.js';
import { prefs } from '../routes/prefs.js';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < lvl1Nav.length; i++){
      const route = lvl1Nav[i].route;
      const text = prefs.language === 'pk' && lvl1Nav[i].textPK ? lvl1Nav[i].textPK : lvl1Nav[i].textEN;
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(lvl1Nav[i].route)} />
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
