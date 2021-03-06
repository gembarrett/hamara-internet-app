import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { virus } from '../../content/devices.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class VirusScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(virus, 0)
  };
  render() {
    return (
      <FourTab backgroundColor='#E6D228'
        tab1={translatedText(virus, 1)}
        tab2={translatedText(virus, 2)}
        tab3={printSections(virus[3].tips)}
        tab4={virus[4].links ? printLinks(virus[4].links, 'yellow') : null}
      />
    );
  }
};
