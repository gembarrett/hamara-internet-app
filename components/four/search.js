import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { search } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle} from '../../routes/shared.js';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(search, 0)
  };
  render() {
    return (
        <FourTab
          tab1={translatedText(search, 1)}
          tab2={translatedText(search, 2)}
          tab3={translatedText(search, 3)}
          tab4={translatedText(search, 4)}
        />
    );
  }
}
