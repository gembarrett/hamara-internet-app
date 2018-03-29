import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { browsers } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle, printLinks} from '../../routes/shared.js';

export default class BrowsersScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(browsers, 0)
  };
  render() {
    return (
        <FourTab
          tab1={translatedText(browsers, 1)}
          tab2={translatedText(browsers, 2)}
          tab3={translatedText(browsers, 3)}
          tab4={printLinks(browsers[4].links, 'orange')}
        />
    );
  }
};
