import React from 'react';
import { Text } from 'react-native';
import BasicText from 'basicText.js';
import { globals } from '../../styles/globals.js';
import { prefs } from '../../routes/prefs.js';

export default class MenuText extends React.Component {
  render() {
    return (
      <BasicText style={globals.menu}>
        { this.props.children }
      </BasicText>
    );
  }
};
