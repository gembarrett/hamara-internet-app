import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { harassment } from '../../content/space.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class HarassmentScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(harassment, 0)
  };
  render() {
    return (
      <FourTab backgroundColor='#E6D228'
        tab1={translatedText(harassment, 1)}
        tab2={translatedText(harassment, 2)}
        tab3={printSections(harassment[3].tips)}
        tab4={harassment[4].links ? printLinks(harassment[4].links, 'yellow') : null}
      />
    );
  }
};
