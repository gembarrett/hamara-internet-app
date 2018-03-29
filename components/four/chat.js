import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourTab from '../four-tab.js';
import { chat } from '../../content/comms.js';
import { prefs } from '../../routes/prefs.js';
import { translatedText, translatedTitle, printLinks } from '../../routes/shared.js';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(chat, 0)
  };
  render() {
    return (
      <FourTab
        tab1={translatedText(chat, 1)}
        tab2={translatedText(chat, 2)}
        tab3={translatedText(chat, 3)}
        tab4={chat[4].links ? printLinks(chat[4].links, 'orange') : null}
      />
    );
  }
};
