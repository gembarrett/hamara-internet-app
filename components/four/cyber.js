import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { cyber } from '../../content/space.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class CyberScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(cyber, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(cyber, 1)}
        tab2={translatedText(cyber, 2)}
        tab3={printSections(cyber[3].tips)}
        tab4={cyber[4].links ? printLinks(cyber[4].links, 'yellow') : null}
      />
    );
  }
};
