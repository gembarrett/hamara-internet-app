import React from 'react';
import { Text } from 'react-native';
import BasicText from './basicText.js';
import { menuStyles } from '../../styles/menus.js'

export default class MenuText extends React.Component {
  render() {
    return (
      <BasicText style={menuStyles.text, this.props.style}>
        <Text>
          { this.props.children }
        </Text>
      </BasicText>
    );
  }
};
