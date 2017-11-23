import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { location } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle, printLinks} from '../../routes/shared.js';

export default class LocationScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(location, 0)
  };
  render() {
    return (
        <FourTab
          tab1={translatedText(location, 1)}
          tab2={translatedText(location, 2)}
          tab3={translatedText(location, 3)}
          tab4={printLinks(location[4].links)}
        />
    );
  }
};
