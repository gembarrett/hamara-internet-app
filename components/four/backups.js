import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { backups } from '../../content/devices.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks } from '../../routes/shared.js';

export default class BackupsScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(backups, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(backups, 1)}
        tab2={translatedText(backups, 2)}
        tab3={translatedText(backups, 3)}
        tab4={printLinks(backups[4].links, 'yellow')}
      />
    );
  }
};
