import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { usbs } from '../../content/devices.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class USBScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(usbs, 0)
  };
  render() {
    return (
      <FourTab backgroundColor='#E6D228'
        tab1={translatedText(usbs, 1)}
        tab2={translatedText(usbs, 2)}
        tab3={printSections(usbs[3].tips)}
        tab4={usbs[4].links ? printLinks(usbs[4].links, 'yellow') : null}
      />
    );
  }
};
