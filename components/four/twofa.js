import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { twoFA } from '../../content/identity.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks } from '../../routes/shared.js';

export default class TwoFAScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(twoFA, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(twoFA, 1)}
        tab2={translatedText(twoFA, 2)}
        tab3={translatedText(twoFA, 3)}
        tab4={twoFA[4].links ? printLinks(twoFA[4].links, 'red') : null}
      />
    );
  }
};
