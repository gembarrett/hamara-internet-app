import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { twoFA } from '../../content/identity.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class TwoFAScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(twoFA, 0)
  };
  render() {
    return (
      <FourTab backgroundColor='#ED1651'
        tab1={translatedText(twoFA, 1)}
        tab2={translatedText(twoFA, 2)}
        tab3={printSections(twoFA[3].tips)}
        tab4={twoFA[4].links ? printLinks(twoFA[4].links, 'red') : null}
      />
    );
  }
};
