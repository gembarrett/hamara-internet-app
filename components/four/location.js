import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { location } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle, printLinks, printSections} from '../../routes/shared.js';

export default class LocationScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(location, 0)
  };
  render() {
    return (
        <FourTab backgroundColor='#F69731'
          tab1={translatedText(location, 1)}
          tab2={translatedText(location, 2)}
          tab3={printSections(location[3].tips)}
          tab4={location[4].links ? printLinks(location[4].links, 'orange') : null}
        />
    );
  }
};
