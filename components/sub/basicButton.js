import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import BasicText from './basicText.js';
import { globals } from '../../styles/globals.js';
import { prefs } from '../../routes/prefs.js';

export default class BasicButton extends React.Component {
  render() {
		const { text, onPress} = this.props;
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <BasicText>{text.toUpperCase()}</BasicText>
      </TouchableOpacity>
    );
  }
};

BasicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
