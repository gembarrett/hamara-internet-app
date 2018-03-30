import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { search } from '../../content/online.js';
import { prefs } from '../../routes/prefs.js';
import {translatedText, translatedTitle, printLinks, printSections} from '../../routes/shared.js';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(search, 0)
  };
  render() {
    return (
        // this swaps the tabs around but errors out when trying to pass tab 3 or 4 as they're wrapped in Views
        <FourTab
          tab1={prefs.language === "pk" ? printLinks(search[4].links, 'orange') : translatedText(search, 1)}
          tab2={prefs.language === "pk" ? printSections(search[3].tips) : translatedText(search, 2)}
          tab3={prefs.language === "pk" ? translatedText(search, 2) : printSections(search[3].tips)}
          tab4={prefs.language === "pk" ? translatedText(search, 1) : printLinks(search[4].links, 'orange')}
        />
    );
  }
}
