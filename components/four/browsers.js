import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { browsers } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle, printLinks, printSections} from '../../routes/shared.js';

export default class BrowsersScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(browsers, 0)
  };
  render() {
    return (
        <FourTab backgroundColor='#F69731'
          tab1={translatedText(browsers, 1)}
          tab2={translatedText(browsers, 2)}
          tab3={printSections(browsers[3].tips)}
          tab4={browsers[4].links ? printLinks(browsers[4].links, 'orange') : null}
        />
    );
  }
};
