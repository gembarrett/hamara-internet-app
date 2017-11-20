import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {online} from '../routes/lvl2.js';

export default class OnlineScreen extends React.Component {
  get buttons() {
    console.log(online);
    // var buttonsListArr = [];
    // for (let i = 0; i < lvl1Nav.length; i++){
    //   buttonsListArr.push(
    //     <View key = {lvl1Nav[i].id}>
    //       <Button
    //         title={lvl1Nav[i].text}
    //         onPress={() => navigate('Menu')}>
    //           {lvl1Nav[i].text}
    //       </Button>
    //     </View>
    //   )
    // }
    // return buttonsListArr;
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Online Screen</Text>
      </View>
    );
  }
};
