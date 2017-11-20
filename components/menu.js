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
      console.log(route);
      buttonsListArr.push(
        <View key = {lvl1Nav[i].id}>
          <Button
            title={lvl1Nav[i].text}
            onPress={() => this.props.navigation.navigate(lvl1Nav[i].route)}>
              {lvl1Nav[i].text}
          </Button>
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
