import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { social } from '../../content/comms.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks, printSections } from '../../routes/shared.js';

export default class SocialScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(social, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(social, 1)}
        tab2={translatedText(social, 2)}
        tab3={printSections(social[3].tips)}
        tab4={social[4].links ? printLinks(social[4].links, 'orange') : null}
      />
    );
  }
};
