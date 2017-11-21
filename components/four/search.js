import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { search } from '../../content/online.js';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Google Yourself',
  }
  const tab1 = search[0].textEN;
  const tab2 = search[1].textEN;
  const tab3 = search[2].textEN;
  const tab4 = search[3].textEN;
  render() {
    return (
        <FourTab />
    );
  }
}
