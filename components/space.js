import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { space } from '../routes/lvl2.js';
import { prefs } from '../routes/prefs.js';

export default class SpaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Protecting your space',
  }

  get buttons() {
    var buttonsListArr = [];
    for (let i = 0; i < space.length; i++){
      const route = space[i].route;
      const text = prefs.language === 'pk' && space[i].textPK ? space[i].textPK : space[i].textEN;
      buttonsListArr.push(
        <View key = {space[i].id}>
          <Button
            title={text}
            onPress={() => this.props.navigation.navigate(space[i].route)} />
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
