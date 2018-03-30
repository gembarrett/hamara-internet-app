import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { passwords } from '../../content/identity.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class PasswordScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(passwords, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(passwords, 1)}
        tab2={translatedText(passwords, 2)}
        tab3={printSections(passwords[3].tips)}
        tab4={passwords[4].links ? printLinks(passwords[4].links, 'red') : null}
      />
    );
  }
};
