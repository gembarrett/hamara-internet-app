import React from 'react';
import { Text } from 'react-native';
import { globals } from '../../styles/globals.js';
import { prefs } from '../../routes/prefs.js';

export default class BasicText extends React.Component {
  render() {
    return (
      <Text style={[prefs.language === 'pk' ? globals.pkFont : globals.enFont, this.props.style]}>
        { this.props.children }
      </Text>
    );
  }
};
